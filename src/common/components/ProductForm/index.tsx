import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@gamiui/standard';

import {
  useCustomTranslation,
  useProductComboCounter,
  useRemoveWhiteSpace,
  useToggle,
} from '../../hooks';
import { NotificationContext } from '../../../context/notification';
import { ProductFormContext } from '../../../context/productForm';
import { GetDishResponseDTO } from '../../types/getDish.type';
import { ProductOperators } from '../ProductOperators';
import { CartContext } from '../../../context/cart';
import { HomeContext } from '../../../context';
import { Combo } from '../Combo';
import * as S from './styles';

interface IProductForm {
  priceByUnit: number;
  combos: GetDishResponseDTO.Combo[];
  maxItems: number;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export const ProductForm = ({
  priceByUnit,
  combos,
  maxItems,
  title,
  description,
  imageUrl,
  slug,
}: IProductForm) => {
  const router = useRouter();
  const { cartId, slugCompany } = router.query;
  console.log(router);
  console.log(Number(cartId));

  const { categoryName } = React.useContext(HomeContext);
  const {
    combosInvalid,
    secondaryProductsTotalPrice,
    setCombosInvalid,
    setIsTriggerValidation,
  } = React.useContext(ProductFormContext);
  const { cartProducts, setCartProducts, setIsEnabledCart } =
    React.useContext(CartContext);
  const { isEnabledFloating, setIsEnabledFloating } =
    React.useContext(NotificationContext);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems - 1);
  const { t } = useCustomTranslation();
  const { isVisible: showErrorText, handleToggle: setShowErrorText } =
    useToggle({ defaultVisible: false });
  const { hyphenatedText } = useRemoveWhiteSpace({ text: categoryName });

  const totalPrice =
    (priceByUnit + secondaryProductsTotalPrice) * (quantity + 1);

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
        title,
        description,
        imageUrl,
        totalPrice,
        quantity: quantity + 1,
        cartId: new Date().getTime(),
        productUrl: router.asPath,
      },
    ];
    setCartProducts(productSet);
  }

  function handleClickApplyChanges() {
    // console.log('Click en aplicar cambios');
    // const result = cartProducts.filter(
    //   (cartProduct) => cartProduct.cartId === Number(cartId)
    // );
    // console.log(result);
  }

  const verifyInvalidCombosOnInitial = (combos: GetDishResponseDTO.Combo[]) => {
    const invalidCombosResult = combos
      .filter(({ minItems = 4 }) => minItems != undefined && minItems != 0)
      .map(({ id }) => ({
        comboId: id,
        validationType: 'minItems',
      }));

    setCombosInvalid(invalidCombosResult);
  };

  React.useEffect(() => {
    verifyInvalidCombosOnInitial(combos);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (isEnabledFloating) setIsEnabledCart(true);
    }, 2000);
  }, [isEnabledFloating]);

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

        {router.asPath ===
        `/${slugCompany}/${hyphenatedText}/product/${slug}` ? (
          <S.AddProductToCart
            className="btn-cart"
            onClick={() => handleClick()}
          >
            {t('pageProductDetails.addText')}
          </S.AddProductToCart>
        ) : (
          <S.AddProductToCart
            className="btn-cart"
            onClick={() => handleClickApplyChanges()}
          >
            {t('pageProductDetails.textToApplyChanges')}
          </S.AddProductToCart>
        )}
      </S.ProductSingleFixBottom>
    </React.Fragment>
  );
};
