import React from 'react';
import { Container } from '@gamiui/standard';

import {
  useCalculateTotalPriceToPay,
  useCustomTranslation,
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
  const [totalPrice, setTotalprice] = React.useState(priceByUnit);
  console.log(totalPrice);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  const { t } = useCustomTranslation();
  console.log(quantity);

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
        <S.ProductQuantityTitle level="h3">
          {t('pageProductDetails.productQuantityTitle')}
        </S.ProductQuantityTitle>
        <ProductOperators
          margin="0"
          width="34%"
          quantity={quantity + 1}
          disableSubtractButton={disableSubtract}
          handleClickSubtract={handleSubtract}
          handleClickAdd={handleAdd}
          disableAddButton={disableAdd}
        />
      </S.ProductInlineBlock>
      <S.ProductSingleFixBottom>
        <S.ProductInlineBlockPrice>
          <S.TotalPrice level="h4">S/ {priceByUnit}</S.TotalPrice>
          {/* <S.TotalPrice level="h4">S/ {totalPrice}</S.TotalPrice> */}
        </S.ProductInlineBlockPrice>
        <S.AddProductToCart>
          {t('pageProductDetails.addButtonText')}
        </S.AddProductToCart>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
