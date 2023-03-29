import styled from '@emotion/styled';
import { Button, Container } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';

export const ComboArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto 15px;
`;

export const ProductSetWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const ElementWrapper = styled(Container)`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ProductName = styled.label`
  color: #2e2e2e;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.strong`
  color: gray;
`;

export const OperatorsImageWrapper = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ProductImage = styled(NextImage)`
  flex-basis: 50px;
`;

// Estilos en otro componente
export const ProductOperators = styled(Container)`
  margin: auto;
  width: 45%;
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
