/* eslint-disable no-empty */
import React from 'react';

import { INITIAL_STATE, ThemeContext, themeReducer } from '../../context/theme';

export interface IUseBlock {
  blockId: string;
}

export const useBlock = (props: IUseBlock) => {
  const basePathSiteEditor = process.env.CMS_URL as string;

  const [_, dispatch] = React.useReducer(themeReducer, INITIAL_STATE);
  const { isEnableHover } = React.useContext(ThemeContext);

  const getTargetOrigin = () => {
    try {
      const url =
        window.location != window.parent.location
          ? document.referrer
          : document.location.href;

      if (url !== `${basePathSiteEditor}/`) throw new Error('Error');

      return basePathSiteEditor;
    } catch (error) {
      throw new Error('Incorret Origin parent');
    }
  };

  const sendMessage = () => {
    if (typeof window === undefined) return;
    try {
      window.parent.postMessage(
        {
          type: 'block-selection',
          message: {
            blockId: props.blockId,
          },
        },
        getTargetOrigin()
      );
    } catch (error) {}
  };

  const onMouseEnter = () => {
    if (typeof window === undefined) return;
    dispatch({ type: 'BLOCK_ID_ACTIVE', payload: props.blockId });
    if (!isEnableHover) return;
    try {
      getTargetOrigin();
    } catch (error) {}
  };

  const onMouseLeave = () => {
    if (typeof window === undefined) return;
    dispatch({ type: 'BLOCK_ID_ACTIVE', payload: '' });
    if (!isEnableHover) return;
    try {
      getTargetOrigin();
    } catch (error) {}
  };

  const handleClick = (e: any) => {
    if (!isEnableHover) return;
    sendMessage();
    e.stopPropagation();
    e.preventDefault();
  };

  return { onMouseEnter, onMouseLeave, handleClick };
};
