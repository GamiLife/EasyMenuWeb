import React from 'react';
import { useRouter } from 'next/router';
import { RichText } from '@gamiui/standard';

import { HomeContext } from '../../../context';
import { CartContext } from '../../../context/cart';
import { lightTheme } from '../../../../styles/design-system';
import * as S from './styles';

export const CartDrawer = () => {
  const router = useRouter();
  const { slugCompany, pslug } = router.query;

  const { categoryName } = React.useContext(HomeContext);
  const { isEnabledCart, setIsEnabledCart } = React.useContext(CartContext);
  // console.log(isEnabledCart);

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
        <S.CloseLink
          href={`/${slugCompany}/${categoryName
            .toLowerCase()
            .replace(' ', '-')}/product/${pslug}`}
        ></S.CloseLink>
      </S.CartDrawerBar>
      <S.ProductList>
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
      </S.ProductList>
    </S.CartDrawer>
  );
};
