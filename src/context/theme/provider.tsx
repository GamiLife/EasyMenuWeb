/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';

import { IThemeProvider, TBlockEditData, ThemeContext } from './context';
import { INITIAL_STATE, themeReducer } from './reducer';
import { useQueryCache } from '../../common/hooks';
import { CompanyContext } from '../company';

const ThemeProvider = ({ children }: IThemeProvider) => {
  const { isFetched } = React.useContext(CompanyContext);
  const [state, dispatch] = React.useReducer(themeReducer, INITIAL_STATE);

  const { get } = useQueryCache();

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
    const companyData = get(['companies']);
    if (!companyData) return;
    dispatch({ type: 'PREVIEW_THEME_BLOCKS', payload: companyData.data.theme });
    dispatch({ type: 'CURRENT_THEME_BLOCKS', payload: companyData.data.theme });
  }, [isFetched]);

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
