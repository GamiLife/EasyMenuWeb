import React from 'react';
import { Container } from '@gamiui/standard';

import { useCustomTranslation, useProductComboCounter } from '../../hooks';
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
  const [totalPrice, setTotalPrice] = React.useState(priceByUnit);
  // console.log(totalPrice);
  // const [totalPricePerQuantity, setTotalPricePerQuantity] =
  //   React.useState(totalPrice);
  // console.log(totalPricePerQuantity);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  const { t } = useCustomTranslation();

  return (
    <React.Fragment>
      <S.Selections>
        {combos.map((combo) => (
          <Container key={combo.id}>
            <Combo {...combo} setTotalPrice={setTotalPrice} minItems={4} />
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
            setTotalPrice(totalPrice - priceByUnit);
          }}
          handleClickAdd={() => {
            handleAdd();
            setTotalPrice((prev) => prev + priceByUnit);
          }}
          disableAddButton={disableAdd}
        />
      </S.ProductInlineBlock>
      <S.ProductSingleFixBottom>
        <S.ProductInlineBlockPrice>
          {/* <S.TotalPrice level="h4">S/ {totalPricePerQuantity}</S.TotalPrice> */}
          <S.TotalPrice level="h4">S/ {totalPrice}</S.TotalPrice>
        </S.ProductInlineBlockPrice>
        <S.AddProductToCart>
          {t('pageProductDetails.addButtonText')}
        </S.AddProductToCart>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
