import styled from '@emotion/styled';
import { Card, Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';
import { NextImage } from '../NextImage';

export const CartBody = styled(Container)`
  height: calc(100% - 184px);
  max-height: calc(100% - 184px);
  overflow: auto;
  overflow-y: scroll;
`;

export const CartItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 22px 22px 0;

  & > li .card__cover {
    align-items: center;
    background: #f3f3f3;
    display: flex;
    height: 164px;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > li:hover .card__cover {
    opacity: 0.75;
    transform: scale(0.925);
  }
`;

export const CartItem = styled.li`
  margin-bottom: 29px;
`;

export const CartProductCard = styled(Card)`
  background: ${lightTheme.primary.white};
  overflow: hidden;
  position: relative;
`;

// export const CardCover = styled(Card.Cover)``;
export const ProductImage = styled(NextImage)``;
