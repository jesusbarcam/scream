import {Theme} from '../models/Theme';
import {firstColor, fourthColor, thirdColor} from './colours';

/**
 * @colourTheme
 * @description
 */
export const DarkThemeColours: Theme = {
  predominantColour: fourthColor, // Pink
  secondaryColour: thirdColor, // Violet
  highlightColour: firstColor, // White
  background: {backgroundColor: fourthColor},
  text: {color: thirdColor},
};
