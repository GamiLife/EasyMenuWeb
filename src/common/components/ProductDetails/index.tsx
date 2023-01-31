import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { NextImage } from '../NextImage';
import { get } from '../../../config/api';
import * as S from './styles';

export interface IProductDetails {
  pslug: string;
}

export const ProductDetails = ({ pslug }: IProductDetails) => {
  const [dishInfo, setDishInfo] = useState({
    description: '',
    imageUrl: '',
    price: 0,
    title: '',
  });
  const [dishSauces, setDishSauces] = useState([]);
  const [dishDishes, setDishDishes] = useState([]);

  const { description, imageUrl, price, title } = dishInfo;

  useEffect(() => {
    if (!pslug) return;

    async function dishesIdfetch() {
      try {
        const { data } = await get(`dishes/slug/${pslug}`);
        const { dishSauces, dishDishes, dishInfo } = data;
        const { description, imageUrl, price, title } = dishInfo;
        setDishInfo({
          description,
          imageUrl,
          price,
          title,
        });
        setDishSauces(dishSauces);
        setDishDishes(dishDishes);
      } catch (e) {
        console.log(e);
      }
    }
    dishesIdfetch();
  }, [pslug]);

  return (
    <S.ProductDetails>
      <S.ContentContainer>
        <S.BackLink href="/">
          <S.BackIcon name="setting" />
          Atrás
        </S.BackLink>
        <S.ProductTitle level="h1">{title}</S.ProductTitle>
        <RichText text={description} margin="0 0 1.7rem" />
        <S.Selections>
          <Container>
            <S.SaucesArea>
              <S.SaucesTitle level="h5" margin="0 0 1rem">
                Elige tus salsas
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
            <S.DishesArea>
              <S.DishesTitle level="h5" margin="0 0 1rem">
                Elige otros platos
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
