import {ColorThemeOption, Theme} from '../models/Theme';
import {DarkThemeColors} from '../themes/dark';
import {LightThemeColors} from '../themes/light';

import {useTheme, darkId} from './UseTheme';

/**
 * @React_hook
 * @description
 */
export const useUIColors = (keyName: ColorThemeOption, lightValue?: string, alpha?: number) => {
  const {theme} = useTheme();
  const themeColors: Theme = theme === darkId ? DarkThemeColors : LightThemeColors;

  lightValue = lightValue ?? themeColors[keyName].lightness;
  alpha = alpha ?? 1;

  return `hsla(${themeColors[keyName].base},${lightValue}, ${alpha})`;
}; // UseUIColors
