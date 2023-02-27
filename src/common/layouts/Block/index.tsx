/* eslint-disable no-empty */
import { Fragment } from 'react';
import { Theme } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

export interface IBlock {
  blockId: string;
  className?: string;
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
  const basePathSiteEditor = 'http://localhost:3000';

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

    try {
      getTargetOrigin();
      console.log('hover');
    } catch (error) {}
  };

  const onMouseLeave = () => {
    if (typeof window === undefined) return;

    try {
      getTargetOrigin();
      console.log('leave');
    } catch (error) {}
  };

  const handleClick = (e: any) => {
    sendMessage();
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Fragment>
      <props.component
        {...props}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={props.className}
      />
    </Fragment>
  );
};
