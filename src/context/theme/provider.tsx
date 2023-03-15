/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useRouter } from 'next/router';

import {
  defaultThemeValues,
  IBlockItem,
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
  const [currentThemeBlocks, setCurrentThemeBlocks] = React.useState<
    IBlockItem[]
  >(defaultThemeValues.previewThemeBlocks);
  const [previewThemeBlocks, setPreviewThemeBlocks] = React.useState<
    IBlockItem[]
  >(defaultThemeValues.previewThemeBlocks);

  const handleOnBlockEdit = (eventData: TBlockEditData) => {
    const { color, background, blockId: blockIdName } = eventData;
    const themeFound = previewThemeBlocks.find(
      ({ blockId }) => blockId === blockIdName
    );
    if (!themeFound) return;

    const editedBlockElement = previewThemeBlocks.map((block) => {
      if (block.blockId === blockIdName) {
        return {
          ...block,
          background: background ?? themeFound.background,
          color: color ?? themeFound.color,
        };
      } else return block;
    });

    setPreviewThemeBlocks(editedBlockElement);
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== process.env.CMS_URL) return;
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

  React.useEffect(() => {
    if (!slugCompany) return;
    async function companyFetch() {
      const { data } = await get('companies/1');
      const { theme } = data;
      setPreviewThemeBlocks(theme);
      setCurrentThemeBlocks(theme);
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
