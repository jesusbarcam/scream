import {useContext} from 'react';

import {ApplicationContext} from '../contexts/ApplicationContext';

export const darkId = 'dark';
export const lightId = 'light';

type lightTypeId = typeof lightId;
type darkTypeId = typeof darkId;
export type ThemeId = darkTypeId | lightTypeId;

/**
 * @hook
 * @method
 * @description
 */
export const useTheme = () => {
  const {state, setState} = useContext(ApplicationContext);

  const toggleTheme = () => {
    const nextTheme = state?.UITheme === lightId ? darkId : lightId;
    setState({...state, UITheme: nextTheme});
  };

  return {theme: state?.UITheme, toggleTheme};
}; // useTheme
