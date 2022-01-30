import {LightThemeColours} from '../themes/light';
import {Theme} from '../models/Theme';

/**
 * @hook
 * @method
 * @description
 */
export const useTheme = (nextTheme?: Theme): Theme => {
  const currentTheme = nextTheme ?? LightThemeColours;

  return currentTheme;
}; // useTheme
