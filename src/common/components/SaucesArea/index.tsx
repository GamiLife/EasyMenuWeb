import React from 'react';
import { Container, Title, RichText } from '@gamiui/standard';

import { IComboAreas, IComboProducts } from '../ProductDetails';
import productDetailsBlock from '../../blocks/productDetails-block.json';
import { useFetchDishById, useProductComboCounter } from '../../hooks';
import { Block } from '../../layouts';
import * as S from './styles';

export const SaucesArea = () => {
  const {
    response: {
      data: { combosSauce },
    },
  } = useFetchDishById();
  if (!combosSauce.length) return;
  const {
    restriction: { maxItemsByRow },
  } = combosSauce[0];

  useProductComboCounter(maxItemsByRow);

  return (
    <S.SaucesArea
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />

      {combosSauce?.map(({ id, title, description, sauces }: IComboAreas) => {
        return (
          <Container key={id}>
            <Title margin="0 0 12px" level="h3">
              {title}
            </Title>
            <RichText margin="0 0 24px" text={description}></RichText>
            <S.SauceContainer>
              <Container width="full">
                {sauces?.map(({ id, title, price }: IComboProducts) => {
                  return (
                    <S.Sauce key={id}>
                      <S.SauceName>
                        {title}
                        <S.SaucePrice> + {price}</S.SaucePrice>
                      </S.SauceName>
                      <S.ProductInlineOperators>
                        <S.QuantityOperator
                          onClick={handleSubtract}
                          disable={disableSubtract}
                        >
                          -
                        </S.QuantityOperator>
                        <S.ProductQuantity>{quantity}</S.ProductQuantity>
                        <S.QuantityOperator
                          onClick={handleAdd}
                          disable={disableAdd}
                        >
                          +
                        </S.QuantityOperator>
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
