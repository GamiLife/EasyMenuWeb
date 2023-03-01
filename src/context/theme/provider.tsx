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

  //Cuando le da en regresar;
  // blocks = currentThemeBlocks
  // setBlocks(currentThemeBlocks)

  const handleOnBlockEdit = (eventData: TBlockEditData) => {
    console.log(eventData);
    const { color, background, blockId } = eventData;
    console.log(background);
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      const { type, message } = event.data;
      console.log(message);
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
        setCurrentThemeBlocks({
          [message.blockId]: {
            background: message.background,
            color: '',
          },
        });
        return;
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{ blockIdActive, blocks, setBlockIdActive, setBlocks }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
