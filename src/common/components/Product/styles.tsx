import styled from '@emotion/styled';
import { Card, Container } from '@gamiui/standard';
import { IGenericEvents } from '@gamiui/standard/lib/types/core/domain/interfaces/IGeneralProps';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';
import { IRichText } from '@gamiui/standard/lib/types/designSystem/atoms/RichText/RichText';
import { IContent } from '@gamiui/standard/lib/types/designSystem/molecules/Card/Content';
import { IButton } from '@gamiui/standard/lib/types/designSystem/atoms/Button/Button';
import { ICard } from '@gamiui/standard/lib/types/designSystem/molecules/Card/Card';
import { IIcon } from '@gamiui/standard/lib/types/designSystem/atoms/Icon/Icon';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';

export const Product = styled(Container)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProductCard = styled(Block<ICard>)``;

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

export const CardContent = styled(Block<IContent & IGenericEvents>)``;

export const ProductName = styled(Block<IRichText>)`
  text-transform: uppercase;
`;

export const DescriptionCardContent = styled(Block<IContainer>)``;

export const CardFooter = styled(Card.Footer)``;

export const WishListIcon = styled(Block<IIcon>)`
  background: transparent;
  color: ${lightTheme.primary.first};
`;

export const ProductButton = styled(Block<IButton>)`
  background-color: ${lightTheme.primary.first};
  height: auto;
  text-transform: uppercase;
  width: 100%;
`;
