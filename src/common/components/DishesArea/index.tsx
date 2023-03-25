import { Container, RichText, Title } from '@gamiui/standard';

import productDetailsBlock from '../../blocks/productDetails-block.json';
import { useFetchDishById } from '../../hooks';
import { Block } from '../../layouts';
import { IComboAreas, IComboProducts } from '../ProductDetails';
import * as S from './styles';

export const DishesArea = () => {
  const {
    response: {
      data: { combosDish },
    },
  } = useFetchDishById();

  return (
    <S.DishesArea
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />
      {combosDish?.map(
        ({ id, title, description, secondaryDishes }: IComboAreas) => {
          return (
            <Container key={id}>
              <Title margin="0 0 12px" level="h3">
                {title}
              </Title>
              <RichText margin="0 0 24px" text={description}></RichText>

              <S.DishContainer>
                <Container width="full">
                  {secondaryDishes?.map(
                    ({ id, title, price }: IComboProducts) => {
                      return (
                        <S.Dish key={id}>
                          <S.DishName>
                            {title} <S.DishPrice> + {price}</S.DishPrice>
                          </S.DishName>
                          <S.ProductInlineOperators>
                            <S.QuantityOperator>-</S.QuantityOperator>
                            <S.ProductQuantity>0</S.ProductQuantity>
                            <S.QuantityOperator>+</S.QuantityOperator>
                          </S.ProductInlineOperators>
                        </S.Dish>
                      );
                    }
                  )}
                </Container>
              </S.DishContainer>
            </Container>
          );
        }
      )}
      {/* <S.DishesTitle level="h5" margin="0 0 1rem">
                  {t('pageProductDetails.dishesTitle')}
                </S.DishesTitle> */}
      {/* {combosDish?.map(({ dishSecond }: IDishDishes) => {
                  const { id, price, title } = dishSecond[0];
                  return (
                    <Container key={id}>
                      <S.Label>{title}</S.Label>
                      <label>{price}</label>
                    </Container>
                  );
                })} */}
    </S.DishesArea>
  );
};
