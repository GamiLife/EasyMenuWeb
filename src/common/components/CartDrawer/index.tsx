import React from 'react';
import { useRouter } from 'next/router';
import { RichText } from '@gamiui/standard';

import { HomeContext } from '../../../context';
import { CartContext } from '../../../context/cart';
import * as S from './styles';

export const CartDrawer = () => {
  const router = useRouter();
  const { slugCompany, pslug } = router.query;

  const { categoryName } = React.useContext(HomeContext);
  const { isEnabledCart } = React.useContext(CartContext);
  // console.log(isEnabledCart);

  return (
    <S.CartDrawer
      open={isEnabledCart}
      width={410}
      placement={'right'}
      zIndex={100}
    >
      <S.CartDrawerBar>
        <S.CloseLink
          href={`${slugCompany}/${categoryName
            .toLowerCase()
            .replace(' ', '-')}/product/${pslug}`}
        ></S.CloseLink>
      </S.CartDrawerBar>
      <RichText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit
        possimus hic delectus a accusantium, rem tempore explicabo
        reprehenderit. Officia ipsam temporibus accusantium neque iste. Maiores
        quae libero laborum minus."
      ></RichText>
    </S.CartDrawer>
  );
};
