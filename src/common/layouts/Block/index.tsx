import { Fragment } from 'react';

type TBlock<P> = P & {
  component: React.FC<P>;
};

interface IBlock {
  blockId: string;
}

/**
 * We will need onClick, onHover, background and border
 * @param param0
 * @returns
 */
export const Block = <P,>({ ...props }: TBlock<P & IBlock>) => {
  const basePathSiteEditor = 'http://localhost:3000';

  const sendMessage = () => {
    if (typeof window === undefined) return;
    window.parent.postMessage(
      {
        type: 'block-selection',
        blockId: props.blockId,
        message: 'click',
      },
      basePathSiteEditor
    );
  };

  const onHover = () => {
    const iframeParent = window.parent;
    if (!iframeParent) return;

    iframeParent.postMessage(
      {
        type: 'block-hover',
        blockId: props.blockId,
        message: 'hover',
      },
      basePathSiteEditor
    );
  };

  return (
    <Fragment>
      <props.component {...props} onClick={sendMessage} onHover={onHover} />
    </Fragment>
  );
};
