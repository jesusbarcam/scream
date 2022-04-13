import {Theme} from '../models/Theme';

import {firstColor, secondColor, thirdColor} from './colours';

/**
 * @colourTheme
 * @description
 */
export const LightThemeColours: Theme = {
  predominantColour: secondColor, // Violet
  secondaryColour: thirdColor, // White
  highlightColour: firstColor, // Pink&red
  background: {backgroundColor: secondColor},
  text: {color: thirdColor},
};
