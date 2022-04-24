import {Theme} from '../models/Theme';
import {firstBaseColor, secondBaseColor, firstLightness, secondLightness, thirdBaseColor, thirdLightness} from './colours';

/**
 * @colourTheme
 * @description
 */
export const LightThemeColors: Theme = {
  neutralColor: {base: firstBaseColor, lightness: firstLightness},
  primaryColor: {base: thirdBaseColor, lightness: thirdLightness},
  secondaryColor: {base: secondBaseColor, lightness: secondLightness},
  highlightColor: {base: firstBaseColor, lightness: firstLightness},
};
