import React from 'react';
import { Container } from '@gamiui/standard';

import { useProductComboCounter } from '../../hooks';
import { GetDishResponseDTO } from '../../types/getDish.type';
import { ProductOperators } from '../ProductOperators';
import { Combo } from '../Combo';
import * as S from './styles';

interface IProductForm {
  priceByUnit: number;
  combos: GetDishResponseDTO.Combo[];
  maxItems: number;
}

export const ProductForm = ({
  priceByUnit,
  combos,
  maxItems,
}: IProductForm) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems);

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
        <ProductOperators maxItems={maxItems} />
        {/* <S.ProductOperators>
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
        </S.ProductOperators> */}
      </S.ProductInlineBlock>
      <S.ProductSingleFixBottom>
        <S.ProductPriceDetails level="h4">
          S/ {priceByUnit}
        </S.ProductPriceDetails>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
