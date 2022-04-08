import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import firestore from '@react-native-firebase/firestore';

interface UserAccount {
  name: string;
  surname: string;
  email: string;
  role: string;
}

/**
 * @screen
 * @description
 */
const HomeScreen = () => {
  const [data, setData] = useState<UserAccount>();

  async function loadData() {
    try {
      const users = await firestore().collection('users').get();
      const user: UserAccount = users.docs[0].data() as UserAccount;
      setData(user);
    } catch (error) {
      console.log('FIREBASE ERROR -> ', error);
    } // TryCatch
  } // LoadData

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <Text>Esto es el inicio de algo muy bonito!</Text>
      {data ? (
        <View>
          <Text>{data.name}</Text>
          <Text>{data.surname}</Text>
          <Text>{data.email}</Text>
          <Text>{data.role}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default HomeScreen;
