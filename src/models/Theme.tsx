export const primaryColorKey = 'primaryColor';
export const secondaryColorKey = 'secondaryColor';
export const neutralColorKey = 'neutralColor';
export const highlightColorKey = 'highlightColor';

export const primaryColorLightness = 'primaryColorLightness';
export const secondaryColorLightness = 'secondaryColorLightness';
export const neutralColorLightness = 'neutralColorLightness';

export type ColorThemeOption = typeof primaryColorKey | typeof secondaryColorKey | typeof neutralColorKey | typeof highlightColorKey;

export interface ThemeColor {
  base: string;
  lightness: string;
}

export type Theme = {
  [primaryColorKey]: ThemeColor;
  [secondaryColorKey]: ThemeColor;
  [neutralColorKey]: ThemeColor;
  [highlightColorKey]: ThemeColor;
};
