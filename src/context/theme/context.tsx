import React from 'react';

export interface IThemeContext {
  blockIdActive: string;
  setBlockIdActive: (value: string) => void;
}

export interface IThemeProvider {
  children: React.ReactNode;
}

export const defaultThemeValues = {
  blockIdActive: '',
};

export const defaultThemeSetter = {
  setBlockIdActive: () => {
    return;
  },
};

export const defaultThemeContext = {
  ...defaultThemeValues,
  ...defaultThemeSetter,
};

export const ThemeContext = React.createContext<IThemeContext>({
  ...defaultThemeContext,
});
