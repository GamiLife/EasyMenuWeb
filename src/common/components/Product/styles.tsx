import styled from '@emotion/styled';
import { Card, Icon, RichText } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';
import { IButton } from '@gamiui/standard/lib/types/designSystem/atoms/Button/Button';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';

export const Product = styled(Block<IContainer>)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProductImage = styled(NextImage)`
  overflow: hidden;
  img {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

export const ProductName = styled(RichText)`
  text-transform: uppercase;
`;

export const CardFooter = styled(Card.Footer)``;

export const WishListIcon = styled(Icon)`
  color: ${lightTheme.primary.first};
`;

export const ProductButton = styled(Block<IButton>)`
  background-color: ${lightTheme.primary.first};
  height: auto;
  text-transform: uppercase;
  width: 100%;
`;
