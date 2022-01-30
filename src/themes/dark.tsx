import {Theme} from '../models/Theme';
import {first, fourth, third} from './colours';

/**
 * @colourTheme
 * @description
 */
export const darkThemeColours: Theme = {
  predominantColour: fourth,
  secondaryColour: third,
  highlightColour: first,
  background: {backgroundColor: fourth},
  text: {color: third},
};
