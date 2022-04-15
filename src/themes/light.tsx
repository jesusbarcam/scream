import {Theme} from '../models/Theme';
import {firstBaseColor, secondBaseColor, firstLightness, secondLightness} from './colours';

/**
 * @colourTheme
 * @description
 */
export const LightThemeColors: Theme = {
  neutralColor: {base: firstBaseColor, lightness: firstLightness},
  primaryColor: {base: firstBaseColor, lightness: firstLightness},
  secondaryColor: {base: secondBaseColor, lightness: secondLightness},
  highlightColor: {base: firstBaseColor, lightness: firstLightness},
};
