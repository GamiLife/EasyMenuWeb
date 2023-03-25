import styled from '@emotion/styled';
import { Button, Container } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../../layouts';

export const DishesArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
`;

export const DishContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const Dish = styled(Container)`
  margin-bottom: 15px;
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

export const ProductInlineOperators = styled(Container)`
  margin: auto;
  width: 40%;
  display: flex;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 25px;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
`;

export const QuantityOperator = styled(Button)`
  padding: 0 10px;
  background: #fff;
  text-align: center;
  line-height: 30px;
  color: #000;
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  box-shadow: none;
`;

export const ProductQuantity = styled.span`
  width: 60px;
  text-align: center;
  color: #000;
  font-size: 17px;
  border-radius: 2px;
  line-height: 1;
`;
