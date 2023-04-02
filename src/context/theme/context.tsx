import React from 'react';

export interface IThemeContext {
  blockIdActive: string;
  blockIdActiveFromSidebar: string;
  isEnableHover: boolean;
  previewThemeBlocks: IBlockItem[];
  currentThemeBlocks: IBlockItem[];
  // setBlockIdActive: (value: string) => void;
  // setBlockIdActiveFromSidebar: (value: string) => void;
  // setIsEnableHover: (value: boolean) => void;
  // setPreviewThemeBlocks: (value: IBlockItem[]) => void;
  // setCurrentThemeBlocks: (value: IBlockItem[]) => void;
}

export interface IBlockItem {
  background: string;
  color: string;
  id: number;
  themeMode: string;
  brandId: number;
  blockId: string;
}

export interface IThemeProvider {
  children: React.ReactNode;
}

export type TBlockEditData = {
  blockId: string;
  background?: string;
  color?: string;
};

export const defaultThemeValues = {
  blockIdActive: '',
  blockIdActiveFromSidebar: '',
  currentThemeBlocks: [],
  previewThemeBlocks: [],
  isEnableHover: false,
  isFetched: false,
};

export const defaultThemeSetter = {
  setBlockIdActive: () => {
    return;
  },
  setIsEnableHover: () => {
    return;
  },
  setPreviewThemeBlocks: () => {
    return;
  },
  setCurrentThemeBlocks: () => {
    return;
  },
  setBlockIdActiveFromSidebar: () => {
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
