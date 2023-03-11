import styled from '@emotion/styled';
import { RichText } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../../layouts/Block';

export const Categories = styled(Block<IContainer>)`
  background: ${lightTheme.primary.white};
  border: 2px solid ${lightTheme.neutral[600]};
  border-radius: 22px;
  display: flex;
  justify-content: center;
  padding-block: 1rem;
`;

export const Category = styled(Block<IContainer>)`
  align-items: center;
  display: flex;
  flex-basis: 141px;
  flex-direction: column;
  padding: 9px 19px 3px;
  position: relative;
  row-gap: 1rem;

  &.active {
    ::after {
      background-color: ${lightTheme.extended.oceanStrong};
      bottom: -5px;
      content: '';
      height: 5px;
      left: 0;
      position: absolute;
      width: 100%;
    }

    img {
      filter: invert(65%) sepia(44%) saturate(6301%) hue-rotate(222deg)
        brightness(100%) contrast(84%);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CategoryTitle = styled(RichText)<{ color?: string }>`
  color: ${({ color }) => color};
`;
