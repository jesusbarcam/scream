import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useTheme, darkId} from '../hooks/UseTheme';
import {LightThemeColours} from '../themes/light';
import {DarkThemeColours} from '../themes/dark';

interface UserAccount {
  name: string;
  surname: string;
  email: string;
  address: string;
  account: Account;
}

type Account = {
  user: string;
  role: string;
  registry: string;
};

async function loadAccount() {
  try {
    const accountData = await firestore().collection('accounts').get();
    const account: Account = accountData.docs[0].data() as Account;
    return account;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function loadUser() {
  try {
    const users = await firestore().collection('users').get();
    const user: UserAccount = users.docs[0].data() as UserAccount;
    return user;
  } catch (error) {
    console.log('FIREBASE ERROR -> ', error);
  } // TryCatch
} // LoadData

/**
 * @Component
 * @React_screen
 * @description
 */
export default function Home() {
  const [data, setData] = useState<UserAccount>();
  const {theme} = useTheme();

  const backgroundColor =
    theme === darkId
      ? DarkThemeColours.predominantColour
      : LightThemeColours.predominantColour;

  async function fetchUserAccountData() {
    const account = await loadAccount();
    const user = await loadUser();

    if (user) {
      user.account = account;
      setData(user);
    }
  }

  useEffect(() => {
    fetchUserAccountData();
  }, []);

  return (
    <View style={{...styles.wrap, backgroundColor}}>
      <Text>Esto es el inicio de algo que va a ser muy bonito!</Text>

      {data ? (
        <View>
          <Text>{data.account.user}</Text>
          <Text>{data.name}</Text>
          <Text>{data.surname}</Text>
          <Text>{data.address}</Text>
        </View>
      ) : null}
    </View>
  );
} // Home

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});
