import React from 'react';
import { Container } from '@gamiui/standard';

import {
  useCustomTranslation,
  useProductComboCounter,
  useToggle,
} from '../../hooks';
import { ProductFormContext } from '../../../context/productForm';
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
  const { combosInvalid, setIsTriggerValidation, secondaryProductsTotalPrice } =
    React.useContext(ProductFormContext);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  const { t } = useCustomTranslation();
  const { isVisible: showErrorText, handleToggle: setShowErrorText } =
    useToggle({ defaultVisible: false });

  return (
    <React.Fragment>
      <S.Selections>
        {combos.map((combo) => (
          <Container key={combo.id}>
            <Combo {...combo} minItems={4} />
          </Container>
        ))}
      </S.Selections>
      <S.ProductInlineBlock>
        <S.ProductQuantityTitle level="h3">
          {t('pageProductDetails.productQuantityTitle')}
        </S.ProductQuantityTitle>
        <ProductOperators
          margin="0"
          width="30%"
          quantity={quantity + 1}
          disableSubtractButton={disableSubtract}
          handleClickSubtract={() => {
            handleSubtract();
          }}
          handleClickAdd={() => {
            handleAdd();
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
        <S.ErrorText className={showErrorText ? 'error' : ''}>
          {showErrorText && 'Completa las opciones requeridas'}
        </S.ErrorText>
        <S.AddProductToCart
          className="btn-cart"
          onClick={() => {
            if (combosInvalid.length === 0) {
              console.log('Completa las opciones requeridas');
              setShowErrorText(!showErrorText);
              setIsTriggerValidation(true);
              setTimeout(() => {
                setIsTriggerValidation(false);
              }, 3000);
            }
          }}
        >
          {t('pageProductDetails.addButtonText')}
        </S.AddProductToCart>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
