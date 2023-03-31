import React from 'react';
import { Container } from '@gamiui/standard';

import {
  useCalculateTotalPriceToPay,
  useProductComboCounter,
} from '../../hooks';
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
  // const { totalPrice } = useCalculateTotalPriceToPay({ priceByUnit });
  // const [totalPrice, setTotalPrice] = React.useState(priceByUnit);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  console.log(quantity);

  const [totalPrice, setTotalprice] = React.useState(priceByUnit);
  console.log(totalPrice);

  return (
    <React.Fragment>
      <S.Selections>
        {combos.map((combo) => (
          <Container key={combo.id}>
            <Combo {...combo} setTotalPrice={setTotalprice} />
          </Container>
        ))}
      </S.Selections>
      <S.ProductInlineBlock>
        <S.ProductQuantityTitle level="h3">Cantidad</S.ProductQuantityTitle>
        <ProductOperators
          margin={'0'}
          width={'30%'}
          quantity={quantity + 1}
          disableSubtractButton={disableSubtract}
          handleClickSubtract={handleSubtract}
          handleClickAdd={handleAdd}
          disableAddButton={disableAdd}
        />
      </S.ProductInlineBlock>
      <S.ProductSingleFixBottom>
        <S.ProductPriceDetails level="h4">
          {/* S/ {priceByUnit} */}
          S/ {totalPrice}
        </S.ProductPriceDetails>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
