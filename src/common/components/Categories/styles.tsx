import styled from '@emotion/styled';
import { Container, RichText } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const Categories = styled(Container)`
  /* backdrop-filter: blur(4px); */
  background: ${lightTheme.primary.white};
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 1rem 5px;
  /* -webkit-backdrop-filter: blur(4px); */

  border-radius: 22px;
  border: 2px solid ${lightTheme.neutral[600]};
`;

export const Category = styled(Container)`
  display: grid;
  gap: 1rem;
  padding: 9px 19px 3px;

  flex-basis: 141px;
  position: relative;

  &.active::after{
    content: '';
    background-color: ${lightTheme.extended.oceanStrong};
    height: 5px;
    width: 100%;
    position: absolute;

    bottom: -5px;
  }

  &.active{
    img{
      filter: invert(65%) sepia(44%) saturate(6301%) hue-rotate(222deg) brightness(100%) contrast(84%);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CategoryTitle = styled(RichText)<{color?: string}>`
  color: ${({color}) => color};
  text-align: center;
`;