import React from 'react';

export interface IBlockItem {
  background: string;
  color: string;
}
export type TBlockEditData = {
  blockId: string;
  background?: string;
  color?: string;
};

export type TBlockId = string;
export type IBlocks = Record<TBlockId, IBlockItem>;
export interface IThemeContext {
  blockIdActive: string;
  blocks: IBlocks;
  setBlockIdActive: (value: string) => void;
  setBlocks: (value: IBlocks) => void;
}

const mockBlocks = {
  'categories-container': {
    background: 'white',
    color: 'black',
  },
  'header-container': {
    background: 'white',
    color: 'black',
  },
  'location-card': {
    background: 'white',
    color: 'black',
  },
};

export interface IThemeProvider {
  children: React.ReactNode;
}

export const defaultThemeValues = {
  blockIdActive: '',
  blocks: mockBlocks,
};

export const defaultThemeSetter = {
  setBlockIdActive: () => {
    return;
  },
  setBlocks: () => {
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
