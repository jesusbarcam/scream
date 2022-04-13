import {useEffect, useState, useContext} from 'react';

import {ApplicationContext} from '../contexts/ApplicationContext';

export const darkThemeId = 'dark';
export const lightThemeId = 'light';

type lightTypeId = typeof lightThemeId;
type darkTypeId = typeof darkThemeId;
export type ThemeId = darkTypeId | lightTypeId;

/**
 * @hook
 * @method
 * @description
 */
export const useTheme = () => {
  const {state, setState} = useContext(ApplicationContext);

  console.log('IN USE THEME -> ', state);

  const toggleTheme = () => {
    const currentTheme = state?.UITheme;
    console.log('CURRENT THEME -> ', currentTheme);
    const nextTheme =
      currentTheme === lightThemeId ? darkThemeId : lightThemeId;
    setState({...state, UITheme: nextTheme});
  };

  useEffect(() => {
    console.log('\n\n\nUSE EFFECT --> ', state?.UITheme);
  });

  return {theme: state?.UITheme, toggleTheme};
}; // useTheme
