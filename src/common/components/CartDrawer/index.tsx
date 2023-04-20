import React from 'react';
import { useRouter } from 'next/router';
import { RichText } from '@gamiui/standard';

import { HomeContext } from '../../../context';
import * as S from './styles';

export const CartDrawer = () => {
  const router = useRouter();
  const { slugCompany, pslug } = router.query;

  const { categoryName } = React.useContext(HomeContext);

  return (
    <S.CartDrawer width={410} open={false} placement={'right'}>
      <S.SidebarLightNavyBlueBar>
        <S.CloseLink
          href={`${slugCompany}/${categoryName
            .toLowerCase()
            .replace(' ', '-')}/product/${pslug}`}
        ></S.CloseLink>
        <S.CloseLink
          href={`/${slugCompany}/${categoryName
            .toLowerCase()
            .replace(' ', '-')}/product/${pslug}`}
        ></S.CloseLink>
      </S.SidebarLightNavyBlueBar>
      <RichText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit
        possimus hic delectus a accusantium, rem tempore explicabo
        reprehenderit. Officia ipsam temporibus accusantium neque iste. Maiores
        quae libero laborum minus."
      ></RichText>
    </S.CartDrawer>
  );
};
