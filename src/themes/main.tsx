import {StyleSheet} from 'react-native';

import {systemColors} from './colours';

/**
 * @Constants
 * @description
 * Here we have all the properties to can able
 * to define each of the styles of the components
 * of our application.
 */
export const FONT_FAMILY_NAME = 'Raleway';
export const TITLE_FONT_SIZE = 18;
export const PARAGRAPH_FONT_SIZE = 14;
export const DETAILS_FONT_SIZE = 12;

export const BOLD_FONT_WEIGHT = '500';
export const MIDDLE_FONT_WEIGHT = '300';
export const THIN_FONT_WEIGHT = '200';

/**
 * @styleSheet
 * @description
 * All style classes of our application.
 */
export const MainStyleSheet = StyleSheet.create({
  errorMessage: {
    color: systemColors.error,
    fontSize: PARAGRAPH_FONT_SIZE,
    fontWeight: MIDDLE_FONT_WEIGHT,
  },
}); // MainStyleSheet
