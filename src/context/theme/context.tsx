import React from 'react';

export interface IThemeContext {
  theme: ITheme[];
}

export interface IThemeProvider {
  children: React.ReactNode;
}

export interface ITheme {
  id: number;
  themeMode: string;
  type: string;
  value: string;
}

export const defaultThemeValues = {
  //   theme: {
  //     id: 0,
  //     themeMode: '',
  //     type: '',
  //     value: '',
  //   },
  theme: [],
};

export const defaultThemeSetter = {
  setTheme: () => {
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
