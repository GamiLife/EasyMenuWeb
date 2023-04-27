import React from 'react';
import { Container } from '@gamiui/standard';

import {
  useCustomTranslation,
  useProductComboCounter,
  useToggle,
} from '../../hooks';
import { NotificationContext } from '../../../context/notification';
import { ProductFormContext } from '../../../context/productForm';
import { GetDishResponseDTO } from '../../types/getDish.type';
import { ProductOperators } from '../ProductOperators';
import { CartContext } from '../../../context/cart';
import { Combo } from '../Combo';
import * as S from './styles';

interface IProductForm {
  priceByUnit: number;
  combos: GetDishResponseDTO.Combo[];
  maxItems: number;
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const ProductForm = ({
  priceByUnit,
  combos,
  maxItems,
  id,
  title,
  description,
  imageUrl,
}: IProductForm) => {
  const {
    combosInvalid,
    setCombosInvalid,
    setIsTriggerValidation,
    secondaryProductsTotalPrice,
  } = React.useContext(ProductFormContext);
  const { cartProducts, setCartProducts } = React.useContext(CartContext);
  const { setIsEnabledFloating } = React.useContext(NotificationContext);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  const { t } = useCustomTranslation();
  const { isVisible: showErrorText, handleToggle: setShowErrorText } =
    useToggle({ defaultVisible: false });

  const totalPrice =
    (priceByUnit + secondaryProductsTotalPrice) * (quantity + 1);

  console.log(cartProducts);

  function handleClick() {
    setIsTriggerValidation(true);
    if (combosInvalid.length > 0) {
      setShowErrorText(true);
      return;
    }
    setShowErrorText(false);
    setIsEnabledFloating(true);
    const productSet = [
      ...cartProducts,
      {
        id,
        title,
        description,
        imageUrl,
        totalPrice,
        quantity: quantity + 1,
        cartId: new Date().getTime(),
      },
    ];
    setCartProducts(productSet);
    // console.log(productSet);
  }

  const verifyInvalidCombosOnInitial = (combos: GetDishResponseDTO.Combo[]) => {
    const invalidCombosResult = combos
      .filter(({ minItems = 4 }) => minItems != undefined && minItems != 0)
      .map(({ id }) => ({
        comboId: id,
        // message: '',
        validationType: 'minItems',
      }));

    setCombosInvalid(invalidCombosResult);
  };

  React.useEffect(() => {
    verifyInvalidCombosOnInitial(combos);
  }, []);

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
          <S.TotalPrice level="h4">S/ {totalPrice}</S.TotalPrice>
        </S.ProductInlineBlockPrice>
        <S.ErrorText className={showErrorText ? 'error' : ''}>
          {showErrorText && 'Completa las opciones requeridas'}
        </S.ErrorText>
        <S.AddProductToCart className="btn-cart" onClick={() => handleClick()}>
          {t('pageProductDetails.addButtonText')}
        </S.AddProductToCart>
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
