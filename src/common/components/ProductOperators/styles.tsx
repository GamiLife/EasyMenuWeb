import styled from '@emotion/styled';
import { Container, Button } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const ProductOperators = styled(Container)<{
  $margin: string;
  $width: string;
}>`
  margin: ${({ $margin }) => $margin};
  width: ${({ $width }) => $width};
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
  border-radius: 2px;
  color: ${lightTheme.primary.black};
  font-size: 17px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  width: 60px;
`;
