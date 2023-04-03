import React from 'react';
import { Container } from '@gamiui/standard';

import { useCustomTranslation, useProductComboCounter } from '../../hooks';
import { GetDishResponseDTO } from '../../types/getDish.type';
import { ProductOperators } from '../ProductOperators';
import { Combo } from '../Combo';
import * as S from './styles';
import { TotalPrice } from './styles';

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
  const [secondaryProductsTotalPrice, setSecondaryProductsTotalPrice] =
    React.useState(0);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  const { t } = useCustomTranslation();

  return (
    <React.Fragment>
      <S.Selections>
        {combos.map((combo) => (
          <Container key={combo.id}>
            <Combo
              {...combo}
              setSecondaryProductsTotalPrice={setSecondaryProductsTotalPrice}
              minItems={4}
              // totalPrice={quantity + 1}
            />
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
          handleClickSubtract={() => {
            handleSubtract();
            // setTotalPricePerQuantity(totalPricePerQuantity - totalPrice);
            // setTotalPrice((prev) => prev - priceByUnit);
          }}
          handleClickAdd={() => {
            handleAdd();
            // setTotalPrice((prev) => prev + priceByUnit);
          }}
          disableAddButton={disableAdd}
        />
      </S.ProductInlineBlock>
      <S.ProductSingleFixBottom>
        <S.ProductInlineBlockPrice>
          <S.TotalPrice level="h4">
            S/ {(priceByUnit + secondaryProductsTotalPrice) * (quantity + 1)}
          </S.TotalPrice>
        </S.ProductInlineBlockPrice>
        <S.AddProductToCart>
          {t('pageProductDetails.addButtonText')}
        </S.AddProductToCart>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
