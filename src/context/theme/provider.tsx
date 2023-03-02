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
  const [blockIdActive, setBlockIdActive] = React.useState(
    defaultThemeValues.blockIdActive
  );
  //CURRENT THEME BLOCKS
  const [currentThemeBlocks, setCurrentThemeBlocks] = React.useState<IBlocks>(
    defaultThemeValues.blocks
  );
  //PREVIEW THEME BLOCKS
  const [blocks, setBlocks] = React.useState<IBlocks>(
    defaultThemeValues.blocks
  );
  // console.log(blocks);

  //Jueves
  const [initialStyles, setInitialStyles] = React.useState(
    defaultThemeValues.initialStyles
  );
  console.log(initialStyles);
  //Jueves

  //Cuando le da en regresar;
  // blocks = currentThemeBlocks
  // setBlocks(currentThemeBlocks)

  const handleOnBlockEdit = (eventData: TBlockEditData) => {
    const { color, background, blockId } = eventData;
    // console.log(eventData);

    // console.log(eventData);
    // const { blockId } = eventData;

    // const {
    //   [blockId]: { background, color },
    // } = blocks;
    setInitialStyles({
      background: background ?? initialStyles.background,
      color: color ?? initialStyles.color,
    });
    // console.log(background);
    // console.log(color);

    // setBlocks({
    //   ...blocks,
    //   [blockId]: {
    //     background: background ?? initialStyles.background,
    //     color: color ?? initialStyles.color,
    //   },
    // });
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      const { type, message } = event.data;
      // console.log(message, type);
      if (!type) return;
      // Tienes que setearle al defaultBlocks lo que esta en blocks
      if (type === 'block-edit-submit') {
        console.log('submit');
        return;
      }
      // Tienes que setearle al blocks lo que esta en defaultBlocks
      if (type === 'block-edit-rollback') {
        console.log('rollback');
        return;
      }
      if (type === 'block-edit') {
        handleOnBlockEdit(message);
        return;
      }
    });
  }, [handleOnBlockEdit]);

  return (
    <ThemeContext.Provider
      value={{
        blockIdActive,
        blocks,
        setBlockIdActive,
        initialStyles,
        setBlocks,
        setInitialStyles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
