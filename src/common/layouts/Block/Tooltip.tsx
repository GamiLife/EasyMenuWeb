import { RichText } from '@gamiui/standard';
import React, { Fragment } from 'react';
import { ThemeContext } from '../../../context/theme';
import { useBlock } from '../../hooks/useBlock';
import * as S from './styles';

export interface ITooltip {
  blockId: string;
}

export const Tooltip = ({ blockId }: ITooltip) => {
  const {
    isEnableHover,
    blockIdActive,
    blockIdActiveFromSidebar,
    previewThemeBlocks,
  } = React.useContext(ThemeContext);

  const { onMouseEnter, onMouseLeave, handleClick } = useBlock({
    blockId,
  });

  const blockFound = previewThemeBlocks[blockId];

  const hasBorder =
    (blockId === blockIdActive && isEnableHover) ||
    blockIdActiveFromSidebar === blockId;

  return (
    <Fragment>
      {hasBorder && blockFound && (
        <S.Tooltip onClick={handleClick} onMouseEnter={onMouseEnter}>
          <RichText
            text={`**BlockId**: ${blockId}`}
            style={{ fontSize: '10px' }}
          />
        </S.Tooltip>
      )}
    </Fragment>
  );
};
