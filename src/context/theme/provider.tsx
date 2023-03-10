/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useRouter } from 'next/router';

import {
  defaultThemeValues,
  IBlockItem,
  // IBlocks,
  IThemeProvider,
  TBlockEditData,
  ThemeContext,
} from './context';
import { get } from '../../config/api';

const ThemeProvider = ({ children }: IThemeProvider) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const [isEnableHover, setIsEnableHover] = React.useState(
    defaultThemeValues.isEnableHover
  );
  const [blockIdActiveFromSidebar, setBlockIdActiveFromSidebar] =
    React.useState(defaultThemeValues.blockIdActiveFromSidebar);
  const [blockIdActive, setBlockIdActive] = React.useState(
    defaultThemeValues.blockIdActive
  );

  // const [currentThemeBlocks, setCurrentThemeBlocks] = React.useState<IBlocks>(
  //   defaultThemeValues.currentThemeBlocks
  // );

  // const [previewThemeBlocks, setPreviewThemeBlocks] = React.useState<IBlocks>(
  //   defaultThemeValues.currentThemeBlocks
  // );
  const [previewThemeBlocks, setPreviewThemeBlocks] = React.useState<
    IBlockItem[]
  >(defaultThemeValues.previewThemeBlocks);

  const handleOnBlockEdit = (eventData: TBlockEditData) => {
    const { color, background, blockId: blockIdName } = eventData;
    const themeMatching = previewThemeBlocks.find(
      ({ blockId }) => blockId === blockIdName
    );
    if (!themeMatching) return;

    // previewThemeBlocks.filter( ({blockId}) => {if(blockId === blockIdName) {
    //   {
    //     background: background ?? themeMatching.background,

    //   }
    // }})
    console.log(themeMatching);
    // const { background, color } = themeMatching;
    // const blockFound = previewThemeBlocks[blockId];
    // const blockFound = previewThemeBlocks;

    // if (!blockFound) return;
    // setPreviewThemeBlocks([
    //   ...previewThemeBlocks,
    //   {
    //     ...themeMatching,
    //     blockId === blockIdName: blockIdName,
    //     background: background ?? themeMatching.background,
    //     color: color ?? themeMatching.color,
    //   },
    // ]);
    //  setPreviewThemeBlocks([
    //    ...previewThemeBlocks,
    //    [blockId]: {
    //      background: background ?? themeMatching.background,
    //      color: color ?? themeMatching.color,
    //    },
    //   ]);
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== 'http://localhost:3000') return;
      const { type, message } = event.data;

      if (!type) return;
      if (type === 'block-edit-submit') {
        // setCurrentThemeBlocks(previewThemeBlocks);
        return;
      }
      if (type === 'block-edit-rollback') {
        // setPreviewThemeBlocks(currentThemeBlocks);
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
    // previewThemeBlocks,
    isEnableHover,
    // currentThemeBlocks,
    blockIdActiveFromSidebar,
  ]);

  React.useEffect(() => {
    if (!slugCompany) return;
    async function companyFetch() {
      const { data } = await get('companies/1');
      const { theme } = data;
      // console.log(theme);
      setPreviewThemeBlocks(theme);
    }
    companyFetch();
  }, [slugCompany]);

  return (
    <ThemeContext.Provider
      value={{
        isEnableHover,
        blockIdActive,
        blockIdActiveFromSidebar,
        previewThemeBlocks,
        // currentThemeBlocks,
        setBlockIdActive,
        setBlockIdActiveFromSidebar,
        // setPreviewThemeBlocks,
        // setCurrentThemeBlocks,
        setIsEnableHover,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
