import React from 'react';
import { Container } from '@gamiui/standard';

import * as S from './styles';
import { useProductComboCounter } from '../../hooks';
import { GetDishResponseDTO } from '../../types/getDish.type';
import { Combo } from '../Combo';

interface IProductForm {
  priceByUnit: number;
  combos: GetDishResponseDTO.Combo[];
}

export const ProductForm = ({ priceByUnit, combos }: IProductForm) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(10);

  return (
    <React.Fragment>
      <S.Selections>
        {combos.map((combo) => (
          <Container key={combo.id}>
            <Combo {...combo} />
          </Container>
        ))}
      </S.Selections>
      <S.ProductInlineBlock>
        <S.ProductQuantityTitle level="h3">Cantidad</S.ProductQuantityTitle>
        <S.ProductOperators>
          <S.QuantityOperator
            onClick={handleSubtract}
            disable={disableSubtract}
          >
            -
          </S.QuantityOperator>
          <S.ProductQuantity>{quantity}</S.ProductQuantity>
          <S.QuantityOperator
            onClick={handleAdd}
            disable={disableAdd}
            className={disableAdd ? 'disabled' : ''}
          >
            +
          </S.QuantityOperator>
        </S.ProductOperators>
      </S.ProductInlineBlock>
      <S.ProductSingleFixBottom>
        <S.ProductPriceDetails level="h4">
          S/ {priceByUnit}
        </S.ProductPriceDetails>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
