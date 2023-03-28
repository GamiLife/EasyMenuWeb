import * as React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Button, Container, RichText, Title } from '@gamiui/standard';
import classNames from 'classnames';

import productDetailsBlock from '../../blocks/productDetails-block.json';
import NextBreadcrumbs from '../NextBreadcrumbs';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';
import * as S from './styles';
import { HomeContext } from '../../../context';
import { Spinner } from '../Spinner';
import { useFetchDishById } from '../../hooks/useFetchDishById';
import { SaucesArea } from '../SaucesArea';
import { DishesArea } from '../DishesArea';

// export interface IComboAreas {
//   id: number;
//   title: string;
//   description: string;
//   sauces?: IComboProducts[];
//   secondaryDishes?: IComboProducts[];
// }

// export interface IComboProducts {
//   description: string;
//   id: string;
//   imageUrl: string;
//   price: number;
//   title: string;
// }

export const ProductDetails = () => {
  const router = useRouter();
  const { slugCompany, pslug } = router.query;

  const { categoryName } = React.useContext(HomeContext);

  const { t } = useTranslation();

  const { response, isLoading } = useFetchDishById();
  // console.log(response);

  if (isLoading) return <Spinner isLoading={isLoading} />;
  const {
    data: {
      combos,
      description,
      id,
      imageUrl,
      maxItems,
      priceByUnit,
      slug,
      title,
    },
  } = response;

  return (
    <React.Fragment>
      {/* <S.CartContentDrawer width={410} open={true} placement={'right'}>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit
          possimus hic delectus a accusantium, rem tempore explicabo
          reprehenderit. Officia ipsam temporibus accusantium neque iste.
          Maiores quae libero laborum minus.
        </p>
      </S.CartContentDrawer> */}
      <S.ProductDetails>
        <S.BreadcrumbContainer>
          <NextBreadcrumbs />
        </S.BreadcrumbContainer>
        <S.ContentContainer>
          <S.BackLink href={`/${slugCompany}`}>
            <S.BackIcon name="setting" />
            {t('pageProductDetails.back')}
          </S.BackLink>
          <S.ProductTitle level="h1">{title}</S.ProductTitle>
          <RichText text={description} margin="0 0 1.7rem" />
          <S.Selections>
            <Container>
              <SaucesArea />
            </Container>
            <Container>
              <DishesArea />
            </Container>
          </S.Selections>
          <S.AddButtonContainer>
            <S.AddButton>{t('pageProductDetails.addButtonText')}</S.AddButton>
          </S.AddButtonContainer>
        </S.ContentContainer>
        <S.PriceImageContainer className={classNames('flex', 'items-center')}>
          {imageUrl && <NextImage imageUrl={imageUrl} alt={title} />}
          <S.ProductPriceDetails>S/ {priceByUnit}</S.ProductPriceDetails>
        </S.PriceImageContainer>
      </S.ProductDetails>
    </React.Fragment>
  );
};
