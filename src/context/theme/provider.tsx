import * as React from 'react';

import { defaultThemeValues, IThemeProvider, ThemeContext } from './context';

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [blockIdActive, setBlockIdActive] = React.useState(
    defaultThemeValues.blockIdActive
  );

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      const { type } = event.data;

      if (!type) return;
      if (type === 'block-edit') {
        console.log(event.data, type);
        setBlockIdActive(event.data.message.blockId);
        return;
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ blockIdActive, setBlockIdActive }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
