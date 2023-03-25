import React from 'react';
import { Container, Title, RichText } from '@gamiui/standard';

import { Block } from '../../layouts';
import * as S from './styles';
import productDetailsBlock from '../../blocks/productDetails-block.json';
import { useFetchDishById } from '../../hooks';

interface IComboSauce {
  id: number;
  title: string;
  description: string;
  sauces: ISauce[];
}

interface ISauce {
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  title: string;
}

export const SaucesArea = () => {
  const {
    response: {
      data: { combosSauce },
    },
  } = useFetchDishById();

  return (
    <S.SaucesArea
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />

      {combosSauce?.map(({ id, title, description, sauces }: IComboSauce) => {
        console.log(title, sauces);
        return (
          <Container key={id}>
            <Title margin="0 0 12px" level="h3">
              {title}
            </Title>
            <RichText margin="0 0 24px" text={description}></RichText>
            <S.SauceContainer>
              <Container width="full">
                {sauces?.map(({ id, title, price }: ISauce) => {
                  return (
                    <S.Sauce key={id}>
                      <S.SauceName>
                        {title}
                        <S.SaucePrice> + {price}</S.SaucePrice>
                      </S.SauceName>
                      <S.ProductInlineOperators>
                        <S.QuantityOperator>-</S.QuantityOperator>
                        <S.ProductQuantity>0</S.ProductQuantity>
                        <S.QuantityOperator>+</S.QuantityOperator>
                      </S.ProductInlineOperators>
                    </S.Sauce>
                  );
                })}
              </Container>
            </S.SauceContainer>
          </Container>
        );
      })}
    </S.SaucesArea>
  );
};

// const { title, description, id } = sauce[0];
// return (
//   <Container key={id}>
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </Container>
// );

{
  /* <S.SaucesTitle level="h5" margin="0 0 1rem">
                  {t('pageProductDetails.saucesTitle')}
                </S.SaucesTitle> */
}
{
  /* {combosSauce?.map(({ sauce }: IDishSauce) => {
                  const { id, price, title } = sauce[0];
                  return (
                    <Container key={id}>
                      <S.Label>{title}</S.Label>
                      <label>{price}</label>
                    </Container>
                  );
                })} */
}
