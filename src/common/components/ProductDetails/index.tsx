import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, RichText } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchDishesId } from '../../hooks';
import NextBreadcrumbs from '../NextBreadcrumbs';
import { NextImage } from '../NextImage';
import * as S from './styles';

import productDetailsBlock from '../../blocks/productDetails-block.json';

export const ProductDetails = () => {
  const { t } = useTranslation();

  const { dishInfo, dishSauces, dishDishes } = useFetchDishesId();
  const { description, imageUrl, price, title } = dishInfo;

  return (
    <S.ProductDetails>
      <S.BreadcrumbContainer>
        <NextBreadcrumbs />
      </S.BreadcrumbContainer>
      <S.ContentContainer>
        <S.BackLink href="/">
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
              <S.SaucesTitle level="h5" margin="0 0 1rem">
                {t('pageProductDetails.saucesTitle')}
              </S.SaucesTitle>
              {dishSauces?.map(({ sauce }) => {
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
              <S.DishesTitle level="h5" margin="0 0 1rem">
                {t('pageProductDetails.dishesTitle')}
              </S.DishesTitle>
              {dishDishes.map(({ dishSecond }) => {
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
      </S.ContentContainer>
      <S.PriceImageContainer className={classNames('flex', 'items-center')}>
        {imageUrl && <NextImage imageUrl={imageUrl} alt={title} />}
        <S.ProductPriceDetails>S/ {price}</S.ProductPriceDetails>
      </S.PriceImageContainer>
    </S.ProductDetails>
  );
};
