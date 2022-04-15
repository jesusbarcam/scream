import {Theme} from '../models/Theme';
import {firstBaseColor, thirdBaseColor, firstLightness, thirdLightness, fourthLightness, fourthBaseColor} from './colours';

/**
 * @colourTheme
 * @description
 */
export const DarkThemeColors: Theme = {
  neutralColor: {base: firstBaseColor, lightness: firstLightness},
  primaryColor: {base: thirdBaseColor, lightness: thirdLightness},
  secondaryColor: {base: fourthBaseColor, lightness: fourthLightness},
  highlightColor: {base: thirdBaseColor, lightness: thirdLightness},
};
