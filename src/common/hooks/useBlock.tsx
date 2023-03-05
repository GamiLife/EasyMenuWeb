/* eslint-disable no-empty */
import React from 'react';

import { ThemeContext } from '../../context/theme';

export interface IUseBlock {
  blockId: string;
}

export const useBlock = (props: IUseBlock) => {
  const basePathSiteEditor = 'http://localhost:3000';
  const { isEnableHover, setBlockIdActive } = React.useContext(ThemeContext);

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
    setBlockIdActive(props.blockId);
    if (!isEnableHover) return;
    try {
      getTargetOrigin();
    } catch (error) {}
  };

  const onMouseLeave = () => {
    if (typeof window === undefined) return;
    setBlockIdActive('');
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
