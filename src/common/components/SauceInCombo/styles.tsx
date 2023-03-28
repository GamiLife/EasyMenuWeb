import styled from '@emotion/styled';
import { Container, Button } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';
import { NextImage } from '../NextImage';

export const Sauce = styled(Container)`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SauceName = styled.label`
  color: #2e2e2e;
`;

export const SaucePrice = styled.strong`
  color: gray;
`;

export const OperatorsImageContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const SauceImage = styled(NextImage)`
  flex-basis: 50px;
`;

export const ProductInlineOperators = styled(Container)`
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
`;

export const ProductQuantity = styled.span`
  width: 60px;
  text-align: center;
  color: ${lightTheme.primary.black};
  font-size: 17px;
  border-radius: 2px;
  line-height: 1;
`;
