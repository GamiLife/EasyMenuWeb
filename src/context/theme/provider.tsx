/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useRouter } from 'next/router';

import { IThemeProvider, TBlockEditData, ThemeContext } from './context';
import { INITIAL_STATE, themeReducer } from './reducer';
import { get } from '../../config/api';

const ThemeProvider = ({ children }: IThemeProvider) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const [state, dispatch] = React.useReducer(themeReducer, INITIAL_STATE);

  const {
    blockIdActive,
    blockIdActiveFromSidebar,
    currentThemeBlocks,
    previewThemeBlocks,
    isEnableHover,
  } = state;

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
      }
      return block;
    });

    dispatch({ type: 'PREVIEW_THEME_BLOCKS', payload: editedBlockElement });
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window.addEventListener('message', (event) => {
      if (event.origin !== process.env.CMS_URL) return;
      const { type, message } = event.data;

      if (!type) return;
      if (type === 'block-edit-submit') {
        dispatch({ type: 'CURRENT_THEME_BLOCKS', payload: previewThemeBlocks });
        return;
      }
      if (type === 'block-edit-rollback') {
        dispatch({ type: 'PREVIEW_THEME_BLOCKS', payload: currentThemeBlocks });
        return;
      }
      if (type === 'block-edit') {
        handleOnBlockEdit(message);
        return;
      }
      if (type === 'hover-block-from-sidebar') {
        dispatch({ type: 'BLOCK_ID_ACTIVE_FROM_SIDEBAR', payload: message });
        return;
      }
      if (type === 'enable-hover') {
        dispatch({ type: 'IS_ENABLE_HOVER', payload: message });
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
      console.log('test component');
      const { data } = await get('companies/1');
      // const { theme } = data;
      dispatch({ type: 'PREVIEW_THEME_BLOCKS', payload: data.theme });
      dispatch({ type: 'CURRENT_THEME_BLOCKS', payload: data.theme });
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
