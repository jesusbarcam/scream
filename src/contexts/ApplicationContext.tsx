import React, {useState} from 'react';

import {DEFAULT_UI_THEME, LANDING_SECTION_NAME} from '../utils/ApplicationSettings';
import {Section} from '../models/Section';

export type ApplicationState = {
  UITheme: string;
  section: Section;
};

export type ApplicationContext = {
  state?: ApplicationState;
  setState?: any;
};

const defaultApplicationState: ApplicationState = {
  UITheme: DEFAULT_UI_THEME,
  section: LANDING_SECTION_NAME,
};

/**
 * @React_context
 */
export const ApplicationContext = React.createContext<ApplicationContext>({});

/**
 * @Component
 * @React_provider
 * @returns
 */
export function ApplicationContextProvider({children}: any) {
  const [state, setState] = useState<ApplicationState>(defaultApplicationState);
  return <ApplicationContext.Provider value={{state, setState}}>{children}</ApplicationContext.Provider>;
} // ApplicationContextProvider
