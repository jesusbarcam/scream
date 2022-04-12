import {Theme} from '../models/Theme';

import {firstColor, secondColor, thirdColor} from './colours';

/**
 * @colourTheme
 * @description
 */
export const LightThemeColours: Theme = {
  predominantColour: secondColor,
  secondaryColour: thirdColor,
  highlightColour: firstColor,
  background: {backgroundColor: secondColor},
  text: {color: thirdColor},
};
