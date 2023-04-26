import React from 'react';
import { useRouter } from 'next/router';
import { RichText } from '@gamiui/standard';

import { CartSummaryDetails } from '../CartSummaryDetails';
import { CartContext } from '../../../context/cart';
import { lightTheme } from '../../../../styles/design-system';
import { CartBody } from '../CartBody';
import * as S from './styles';

export const CartDrawer = () => {
  const router = useRouter();
  const { slugCompany, pslug } = router.query;

  const { cartProducts, isEnabledCart, setCartProducts, setIsEnabledCart } =
    React.useContext(CartContext);

  let totalToPay = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    totalToPay = totalToPay + cartProducts[i].totalPrice;
  }

  return (
    <S.CartDrawer
      open={isEnabledCart}
      width={410}
      placement={'right'}
      zIndex={100}
    >
      <S.CartDrawerBar>
        <S.CloseIcon
          color={lightTheme.primary.white}
          name="close"
          onClick={() => setIsEnabledCart(false)}
        />
      </S.CartDrawerBar>
      {cartProducts.length === 0 ? (
        <S.EmptyCart>
          <RichText
            text={'Agrega algún producto a tu carrito de compras'}
            margin="0 0 14px"
          />
          <S.LetterButton
            onClick={() => {
              setIsEnabledCart(false);
              window.location.pathname = `${slugCompany}`;
            }}
          >
            Carta
          </S.LetterButton>
        </S.EmptyCart>
      ) : (
        <React.Fragment>
          <CartBody
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
          <CartSummaryDetails totalToPay={totalToPay} />
        </React.Fragment>
      )}
    </S.CartDrawer>
  );
};
