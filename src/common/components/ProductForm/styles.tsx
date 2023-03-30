import styled from '@emotion/styled';
import { Container, Title, Button } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const Selections = styled(Container)``;

export const ProductInlineBlock = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
`;

export const ProductQuantityTitle = styled(Title)`
  margin-right: 17px;
  min-width: 70px;
  font-size: 19px;
  color: ${lightTheme.primary.black};
`;

export const ProductOperators = styled(Container)`
  width: 30%;
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
  background: ${lightTheme.primary.white};
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
    pointer-events: none;
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

export const ProductSingleFixBottom = styled(Container)`
  margin: 5px 0;
`;

export const ProductInlineBlockPrice = styled(Container)`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;
`;

export const ProductPriceDetails = styled(Title)`
  margin: 0;
  flex: 1;
  font-size: 23px;
`;
