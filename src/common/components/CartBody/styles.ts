import styled from '@emotion/styled';
import { Button, Card, Container, RichText } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';
import { NextImage } from '../NextImage';

export const CartBody = styled(Container)`
  height: calc(100% - 184px);
  max-height: calc(100% - 184px);
  overflow: auto;
  overflow-y: scroll;

  /* & .card__cover img {
    max-width: 100%;
  } */

  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${lightTheme.primary.first};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${lightTheme.primary.first};
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #e2e2e2;
  }
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

  & .card__content {
    background: ${lightTheme.primary.white};
    padding: 12px 19px 0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & > li:hover .card__content {
    /* transform: translateY(-76px); */
    transform: translateY(-84px);
  }
`;

export const CartItem = styled.li`
  margin-bottom: 29px;
`;

export const CartCard = styled(Card)`
  background: ${lightTheme.primary.white};
  overflow: hidden;
  position: relative;
`;

export const ProductImage = styled(NextImage)``;

export const ProductName = styled.b`
  /* font-family: VeneerCleanReg, Helvetica, Arial, sans-serif; */
  color: ${lightTheme.primary.black};
  font-size: 19px;
  text-transform: uppercase;
`;

export const ProductDescription = styled(RichText)`
  color: ${lightTheme.primary.black};
  font-family: TradeGothicLTStdLight, Helvetica, Arial, sans-serif;
  font-size: 16px;

  margin-bottom: 16px;
  padding-top: 5px;
`;

export const CardFooter = styled(Card.Footer)`
  padding: 0 19px;
`;

export const BTag = styled.b`
  font-size: 16px;
  width: 100px;
  display: inline-block;

  color: ${lightTheme.primary.black};
`;

export const SpanTag = styled.span`
  font-size: 16px;
  color: ${lightTheme.primary.black};
`;

export const ProductActions = styled(Container)`
  display: flex;
  margin-bottom: -54px;
  transition: all 0.5s;

  & .product-actions__remove {
    color: ${lightTheme.primary.first};
    background: transparent;
    border-color: transparent;
  }
`;

export const ProductButton = styled(Button)`
  flex: 1;
  display: block;
  margin: 0 3px;
  font-size: 17px;
  text-transform: uppercase;
  box-shadow: none;

  /* padding: 8px 19px 3px; */
  border-radius: 15px;
  background: ${lightTheme.primary.first};
  border: none;
  text-align: center;
  color: ${lightTheme.primary.white};
`;
