import styled from '@emotion/styled';
import { Button, Card, Container, Icon, RichText } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';

export const Product = styled(Container)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProductName = styled(RichText)`
  text-transform: uppercase;
`;

export const CardFooter = styled(Card.Footer)``;

export const WishListIcon = styled(Icon)`
  color: ${lightTheme.primary.first};
`;

export const ProductButton = styled(Button)`
  background-color: ${lightTheme.primary.first};
  height: auto;
  text-transform: uppercase;
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
