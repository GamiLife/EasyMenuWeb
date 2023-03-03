import React from 'react';

import { lightTheme } from '../../../styles/design-system';

export interface IThemeContext {
  blockIdActive: string;
  initialStyles: IBlockItem;
  isEnableHover: boolean;
  blocks: IBlocks;
  setBlockIdActive: (value: string) => void;
  setInitialStyles: (value: IBlockItem) => void;
  setIsEnableHover: (value: boolean) => void;
  setBlocks: (value: IBlocks) => void;
}

export interface IBlockItem {
  background: string;
  color: string;
}

export interface IThemeProvider {
  children: React.ReactNode;
}

export type TBlockEditData = {
  blockId: string;
  background?: string;
  color?: string;
};

export type TBlockId = string;
export type IBlocks = Record<TBlockId, IBlockItem>;

const mockBlocks = {
  'header-container': {
    background: `${lightTheme.primary.white}`,
    color: `${lightTheme.primary.black}`,
  },
  'categories-container': {
    background: `${lightTheme.primary.white}`,
    color: `${lightTheme.primary.black}`,
  },
  'wrapper-page': {
    background: `${lightTheme.primary.second}`,
    color: `${lightTheme.primary.black}`,
  },
  'product-card': {
    background: `${lightTheme.primary.white}`,
    color: `${lightTheme.primary.black}`,
  },
  'shipping-button': {
    background: `${lightTheme.primary.first}`,
    color: `${lightTheme.primary.white}`,
  },
  'footer-container': {
    background: `${lightTheme.primary.first}`,
    color: `${lightTheme.primary.white}`,
  },
  'scroll-button': {
    background: `${lightTheme.primary.mediumPurple}`,
    color: `${lightTheme.primary.white}`,
  },
  'container-selection-area': {
    background: `${lightTheme.primary.white}`,
    color: `${lightTheme.primary.black}`,
  },
  'location-card': {
    background: `${lightTheme.primary.white}`,
    color: `${lightTheme.primary.black}`,
  },
};

export const defaultThemeValues = {
  blockIdActive: '',
  blocks: mockBlocks,
  isEnableHover: false,
  initialStyles: {
    background: '',
    color: '',
  },
};

export const defaultThemeSetter = {
  setBlockIdActive: () => {
    return;
  },
  setBlocks: () => {
    return;
  },
  setInitialStyles: () => {
    return;
  },
  setIsEnableHover: () => {
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
