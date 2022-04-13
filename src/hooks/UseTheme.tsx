import {useEffect, useState} from 'react';

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
  const [theme, setTheme] = useState<ThemeId>('light');

  const toggleTheme = () => {
    console.log('************************************************************');
    console.log('************************************************************');
    console.log('CURRENT THEME -> ', theme);
    const nextTheme = theme === lightThemeId ? darkThemeId : lightThemeId;
    console.log('NEXT THEME    -> ', nextTheme);
    console.log('************************************************************');
    console.log('************************************************************');
    setTheme(nextTheme);
  };

  useEffect(() => {
    console.log('\n\n\nUSE EFFECT --> ', theme);
  });

  return [theme, toggleTheme];
}; // useTheme
