import styled from '@emotion/styled';
import { Container, Button } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';
import { NextImage } from '../NextImage';

export const Dish = styled(Container)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const DishName = styled.label`
  color: #2e2e2e;
`;

export const DishPrice = styled.strong`
  color: gray;
`;

export const OperatorsImageWrapper = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const DishImage = styled(NextImage)`
  flex-basis: 50px;
`;

export const ProductOperators = styled(Container)`
  margin: auto;
  width: 50%;
  display: flex;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 25px;
  align-items: center;
  background-color: ${lightTheme.primary.white};
  justify-content: space-between;
`;

export const QuantityOperator = styled(Button)`
  padding: 0 10px;
  background: #fff;
  text-align: center;
  line-height: 30px;
  color: ${lightTheme.primary.black};
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  box-shadow: none;

  &.disabled {
    color: #b7b7b7;
  }
`;

export const ProductQuantity = styled.span`
  width: 60px;
  text-align: center;
  color: ${lightTheme.primary.black};
  font-size: 17px;
  border-radius: 2px;
  line-height: 1;
`;
