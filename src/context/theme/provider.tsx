/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

import {
  defaultThemeValues,
  IBlocks,
  IThemeProvider,
  TBlockEditData,
  ThemeContext,
} from './context';

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [isEnableHover, setIsEnableHover] = React.useState(
    defaultThemeValues.isEnableHover
  );
  const [blockIdActive, setBlockIdActive] = React.useState(
    defaultThemeValues.blockIdActive
  );
  const [currentThemeBlocks, setCurrentThemeBlocks] = React.useState<IBlocks>(
    defaultThemeValues.blocks
  );
  const [blocks, setBlocks] = React.useState<IBlocks>(
    defaultThemeValues.blocks
  );
  const [initialStyles, setInitialStyles] = React.useState(
    defaultThemeValues.initialStyles
  );

  const handleOnBlockEdit = (eventData: TBlockEditData) => {
    const { color, background, blockId } = eventData;

    setBlocks({
      ...blocks,
      [blockId]: {
        background: background ?? initialStyles.background,
        color: color ?? initialStyles.color,
      },
    });
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      const { type, message } = event.data;

      if (!type) return;
      if (type === 'block-edit-submit') {
        console.log('submit');
        setCurrentThemeBlocks(blocks);
        return;
      }
      if (type === 'block-edit-rollback') {
        console.log('rollback');
        setBlocks(currentThemeBlocks);
        return;
      }
      if (type === 'block-edit') {
        handleOnBlockEdit(message);
        return;
      }
      if (type === 'enable-hover') {
        setIsEnableHover(message);
        return;
      }
    });
  }, [initialStyles]);

  return (
    <ThemeContext.Provider
      value={{
        isEnableHover,
        blockIdActive,
        blocks,
        setBlockIdActive,
        initialStyles,
        setBlocks,
        setInitialStyles,
        setIsEnableHover,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
