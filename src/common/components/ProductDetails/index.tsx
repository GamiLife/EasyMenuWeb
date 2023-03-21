import * as React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Container, Drawer, RichText } from '@gamiui/standard';
import classNames from 'classnames';

import productDetailsBlock from '../../blocks/productDetails-block.json';
import { useFetchDishesId } from '../../hooks';
import NextBreadcrumbs from '../NextBreadcrumbs';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';
import * as S from './styles';

interface IDishSauce {
  sauce: ISauce[];
}

interface ISauce {
  companyId: string;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  updatedAt: string;
}

interface IDishDishes {
  dishSecond: IDishSecond[];
}

interface IDishSecond {
  categoryId: string;
  companyId: string;
  createdAt: string;
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  slug: string;
  title: string;
  updatedAt: string;
}

export const ProductDetails = () => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const { t } = useTranslation();

  const { data, isLoading } = useFetchDishesId();

  if (isLoading) return null;
  const { dishInfo, dishSauces, dishDishes } = data;
  const { description, imageUrl, price, title } = dishInfo;

  return (
    <React.Fragment>
      <Drawer style={{ marginTop: '100px' }} open={true} placement={'right'}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit
          possimus hic delectus a accusantium, rem tempore explicabo
          reprehenderit. Officia ipsam temporibus accusantium neque iste.
          Maiores quae libero laborum minus.
        </p>
      </Drawer>
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
              <S.SaucesArea
                component={Container}
                blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
              >
                <Block.Tooltip
                  blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
                />
                <S.SaucesTitle level="h5" margin="0 0 1rem">
                  {t('pageProductDetails.saucesTitle')}
                </S.SaucesTitle>
                {dishSauces?.map(({ sauce }: IDishSauce) => {
                  const { id, price, title } = sauce[0];
                  return (
                    <Container key={id}>
                      <S.Label>{title}</S.Label>
                      <label>{price}</label>
                    </Container>
                  );
                })}
              </S.SaucesArea>
            </Container>
            <Container>
              <S.DishesArea
                component={Container}
                blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
              >
                <Block.Tooltip
                  blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
                />
                <S.DishesTitle level="h5" margin="0 0 1rem">
                  {t('pageProductDetails.dishesTitle')}
                </S.DishesTitle>
                {dishDishes.map(({ dishSecond }: IDishDishes) => {
                  const { id, price, title } = dishSecond[0];
                  return (
                    <Container key={id}>
                      <S.Label>{title}</S.Label>
                      <label>{price}</label>
                    </Container>
                  );
                })}
              </S.DishesArea>
            </Container>
          </S.Selections>
          <S.AddButtonContainer>
            <S.AddButton>{t('pageProductDetails.addButtonText')}</S.AddButton>
          </S.AddButtonContainer>
        </S.ContentContainer>
        <S.PriceImageContainer className={classNames('flex', 'items-center')}>
          {imageUrl && <NextImage imageUrl={imageUrl} alt={title} />}
          <S.ProductPriceDetails>S/ {price}</S.ProductPriceDetails>
        </S.PriceImageContainer>
      </S.ProductDetails>
    </React.Fragment>
  );
};
