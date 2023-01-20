import { css } from '@emotion/react';

export interface IFlex {
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  flexDirection?: React.CSSProperties['flexDirection'];
}

export const flex = ({
  justifyContent,
  alignItems,
  flexDirection,
}: IFlex) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;
