/* eslint-disable no-empty */
import * as React from 'react';
import { Theme } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import { ThemeContext } from '../../../context/theme';
import { lightTheme } from '../../../../styles/design-system';
import { useBlock } from '../../hooks/useBlock';
import { Tooltip } from './Tooltip';

export interface IBlock {
  blockId: string;
  className?: string;
  allowBorder?: boolean;
}

export type TBlock<P> = P & {
  component: React.FC<P>;
};

export type TBlockStyle<P> = StyledComponent<
  P & {
    component: React.FC<P>;
  } & {
    theme?: Theme | undefined;
  },
  any,
  any
>;

/**
 * We will need onClick, onHover, background and border
 * @param param0
 * @returns
 */
export const Block = <P,>({ ...props }: TBlock<P & IBlock>) => {
  const {
    isEnableHover,
    blockIdActive,
    blockIdActiveFromSidebar,
    previewThemeBlocks,
  } = React.useContext(ThemeContext);
  const { onMouseEnter, onMouseLeave, handleClick } = useBlock({
    blockId: props.blockId,
  });

  const get = () => {
    const blockFound = previewThemeBlocks.find(
      ({ blockId }) => blockId === props.blockId
    );

    if (!blockFound) return;
    const { background, color } = blockFound;
    return { background, color };
  };

  const hasBorder =
    props.allowBorder != false &&
    ((props.blockId === blockIdActive && isEnableHover) ||
      blockIdActiveFromSidebar === props.blockId);

  const borderStyles = hasBorder
    ? {
        border: `2px solid ${lightTheme.primary.jordyBlue}`,
        position: 'relative',
        cursor: 'pointer',
      }
    : {};

  return (
    <React.Fragment>
      <props.component
        {...props}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={props.className}
        style={{
          ...borderStyles,
          ...get(),
        }}
      />
    </React.Fragment>
  );
};

Block.Tooltip = Tooltip;
