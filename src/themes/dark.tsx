import {Theme} from '../models/Theme';
import {firstColor, fourthColor, thirdColor} from './colours';

/**
 * @colourTheme
 * @description
 */
export const darkThemeColours: Theme = {
  predominantColour: fourthColor,
  secondaryColour: thirdColor,
  highlightColour: firstColor,
  background: {backgroundColor: fourthColor},
  text: {color: thirdColor},
};
