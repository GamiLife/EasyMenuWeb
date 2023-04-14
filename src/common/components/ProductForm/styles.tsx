import styled from '@emotion/styled';
import { Button, Container, Title } from '@gamiui/standard';

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
  font-size: 17px;
  color: ${lightTheme.primary.black};
`;

export const ProductSingleFixBottom = styled(Container)`
  margin: 5px 0;
  .error + .btn-cart {
    margin-top: 6px;
  }
`;

export const ProductInlineBlockPrice = styled(Container)`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;
`;

export const TotalPrice = styled(Title)`
  flex: 1;
  font-size: 28px;
`;

export const ErrorText = styled.span`
  &.error {
    color: ${lightTheme.semantic.danger};
    font-size: 93%;
    font-weight: 100;
  }
`;

export const AddProductToCart = styled(Button)`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  border-radius: 15px;
  background: ${lightTheme.primary.first};
  border: none;
  text-align: center;
  color: ${lightTheme.primary.white};
  text-transform: uppercase;
`;
