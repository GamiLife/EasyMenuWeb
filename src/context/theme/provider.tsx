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
  const [blockIdActiveFromSidebar, setBlockIdActiveFromSidebar] =
    React.useState(defaultThemeValues.blockIdActiveFromSidebar);
  const [blockIdActive, setBlockIdActive] = React.useState(
    defaultThemeValues.blockIdActive
  );
  const [currentThemeBlocks, setCurrentThemeBlocks] = React.useState<IBlocks>(
    defaultThemeValues.currentThemeBlocks
  );
  const [previewThemeBlocks, setPreviewThemeBlocks] = React.useState<IBlocks>(
    defaultThemeValues.currentThemeBlocks
  );

  const handleOnBlockEdit = (eventData: TBlockEditData) => {
    const { color, background, blockId } = eventData;
    const blockFound = previewThemeBlocks[blockId];

    if (!blockFound) return;

    setPreviewThemeBlocks({
      ...previewThemeBlocks,
      [blockId]: {
        background: background ?? blockFound.background,
        color: color ?? blockFound.color,
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
        setCurrentThemeBlocks(previewThemeBlocks);
        return;
      }
      if (type === 'block-edit-rollback') {
        setPreviewThemeBlocks(currentThemeBlocks);
        return;
      }
      if (type === 'block-edit') {
        handleOnBlockEdit(message);
        return;
      }
      if (type === 'hover-block-from-sidebar') {
        setBlockIdActiveFromSidebar(message);
        return;
      }
      if (type === 'enable-hover') {
        setIsEnableHover(message);
        return;
      }
    });
  }, [
    previewThemeBlocks,
    isEnableHover,
    currentThemeBlocks,
    blockIdActiveFromSidebar,
  ]);

  return (
    <ThemeContext.Provider
      value={{
        isEnableHover,
        blockIdActive,
        blockIdActiveFromSidebar,
        previewThemeBlocks,
        currentThemeBlocks,
        setBlockIdActive,
        setBlockIdActiveFromSidebar,
        setPreviewThemeBlocks,
        setCurrentThemeBlocks,
        setIsEnableHover,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
