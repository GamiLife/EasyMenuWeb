import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { get } from '../../../config/api';
import { NextImage } from '../NextImage';
import * as S from './styles';

export const ProductDetails = () => {
  const [dishInfo, setDishInfo] = useState({
    description: '',
    imageUrl: '',
    price: 0,
    title: ''
  });
  const [dishSauces, setDishSauces] = useState([]);
  const [dishDishes, setDishDishes] = useState([]);

  const { description, imageUrl, price, title } = dishInfo;

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    async function dishesIdfetch(){
      try{
        const result = await get(`dishes/${pid}`);
        const { dishSauces, dishDishes } = result.data;
        const { description, imageUrl, price, title } = result.data.dishInfo;
        setDishInfo({
          description: description,
          imageUrl: imageUrl,
          price: price,
          title: title
        })
        setDishSauces(dishSauces);
        setDishDishes(dishDishes);
      }catch(e){
        console.log(e);
      }
    }
    dishesIdfetch();
  }, [])

  return (
    <S.ProductDetails>
      <S.ContentContainer>
        <S.BackLink href='/'>
          <S.BackIcon name='setting' />
            Atrás
        </S.BackLink>
        <S.ProductTitle level='h1'>{title}</S.ProductTitle >
        <RichText text={description} margin='0 0 1.7rem' />
        <S.Selections>
          <Container>
            <S.SaucesArea>
              <S.SaucesTitle level='h5' margin='0 0 1rem'>Elige tus salsas</S.SaucesTitle>
              {
                dishSauces?.map(
                  ({ sauce }) => {
                    const { id, price, title} = sauce[0];
                    return (
                      <Container key={id}>
                        <S.Label>{title}</S.Label>
                        <label>{price}</label>
                      </Container>)
                  }
                )
              }
            </S.SaucesArea>
          </Container>
          <Container>
            <S.DishesArea>
              <S.DishesTitle level='h5' margin='0 0 1rem'>Elige otros platos</S.DishesTitle>
              {
                dishDishes.map(
                  ({ dishSecond }) => {
                    const { id, price, title} = dishSecond[0];
                    return (
                      <Container key={id}>
                        <S.Label>{title}</S.Label>
                        <label>{price}</label>
                      </Container>
                    )
                  }
                )
              }
            </S.DishesArea>
          </Container>
        </S.Selections>
      </S.ContentContainer>
      <S.PriceImageContainer className={classNames('flex', 'items-center')}>
        {  
          imageUrl && (
            <NextImage 
              imageUrl={imageUrl}
              alt={title}
            />
          )
        }
        <S.ProductPriceDetails>S/ {price}</S.ProductPriceDetails>
      </S.PriceImageContainer>
    </S.ProductDetails>
  )
}