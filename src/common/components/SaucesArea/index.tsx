import React from 'react';
import { Container, Title, RichText } from '@gamiui/standard';

import { IComboAreas, IComboProducts } from '../ProductDetails';
import productDetailsBlock from '../../blocks/productDetails-block.json';
import { useFetchDishById, useProductComboCounter } from '../../hooks';
import { Block } from '../../layouts';
import * as S from './styles';
import { GetDishResponseDTO } from '../../types/getDish.type';
import Image from 'next/image';
import { NextImage } from '../NextImage';

export const SaucesArea = () => {
  // const {
  //   response: {
  //     data: { combosSauce },
  //   },
  // } = useFetchDishById();
  const {
    response: {
      data: { combos },
    },
  } = useFetchDishById();
  console.log(combos[0]);
  const { title, description, maxItems, sauces } = combos[0];
  // if (!combosSauce.length) return;
  // const {
  //   restriction: { maxItemsByRow },
  // } = combosSauce[0];

  // useProductComboCounter(maxItemsByRow);

  return (
    <S.SaucesArea
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />
      <Container>
        <Title margin="0 0 12px" level="h3">
          {title}
        </Title>
        <RichText margin="0 0 24px" text={description}></RichText>
        <S.SauceContainer>
          {sauces?.map(
            ({ id, sauce, maxItemsByRow }: GetDishResponseDTO.SauceInCombo) => {
              const { title, description, priceByUnit, imageUrl } = sauce;
              return (
                <Container key={id} width="full">
                  <S.Sauce>
                    <S.SauceName>
                      {title}
                      <S.SaucePrice> + {priceByUnit}</S.SaucePrice>
                    </S.SauceName>
                    <RichText text={description} margin="0 0 10px" />
                    <S.OperatorsImageContainer>
                      <NextImage
                        imageUrl={imageUrl}
                        alt={title}
                        height="42px"
                      />
                      <S.ProductInlineOperators>
                        <S.QuantityOperator
                        // onClick={handleSubtract}
                        // disable={disableSubtract}
                        >
                          -
                        </S.QuantityOperator>
                        <S.ProductQuantity>0</S.ProductQuantity>
                        {/* <S.ProductQuantity>{quantity}</S.ProductQuantity> */}
                        <S.QuantityOperator
                        // onClick={handleAdd}
                        // disable={disableAdd}
                        >
                          +
                        </S.QuantityOperator>
                      </S.ProductInlineOperators>
                    </S.OperatorsImageContainer>
                  </S.Sauce>
                </Container>
              );
            }
          )}
          <Container>
            <S.Sauce></S.Sauce>
          </Container>
        </S.SauceContainer>
      </Container>
    </S.SaucesArea>
  );
};

// {sauces?.map(
//   ({
//     id,
//     sauce,
//     maxItemsByRow,
//   }: // priceByUnit,
//   GetDishResponseDTO.SauceInCombo) => {
//     // const { title, description, priceByUnit, imageUrl } = sauce;

//     return (
//       <Container key={id}>
//         <S.SauceContainer>
//           <Container width="full">
//             {/* {sauces?.map(({ id, title, price }: IComboProducts) => {
//               return (
//                 <S.Sauce key={id}>
//                   <S.SauceName>
//                     {title}
//                     <S.SaucePrice> + {price}</S.SaucePrice>
//                   </S.SauceName>
//                   <S.ProductInlineOperators>
//                     <S.QuantityOperator
//                       onClick={handleSubtract}
//                       disable={disableSubtract}
//                     >
//                       -
//                     </S.QuantityOperator>
//                     <S.ProductQuantity>{quantity}</S.ProductQuantity>
//                     <S.QuantityOperator
//                       onClick={handleAdd}
//                       disable={disableAdd}
//                     >
//                       +
//                     </S.QuantityOperator>
//                   </S.ProductInlineOperators>
//                 </S.Sauce>
//               );
//             })} */}
//           </Container>
//         </S.SauceContainer>
//       </Container>
//     );
//   }
// )}
