import {Theme} from '../models/Theme';

import {first, second, third} from './colours';

/**
 * @colourTheme
 * @description
 */
export const LightThemeColours: Theme = {
  predominantColour: second,
  secondaryColour: third,
  highlightColour: first,
  background: {backgroundColor: second},
  text: {color: third},
};
