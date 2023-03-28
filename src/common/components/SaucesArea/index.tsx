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
import { SauceContainer } from '../SauceContainer';

export const SaucesArea = () => {
  const {
    response: {
      data: { combos },
    },
  } = useFetchDishById();

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
        <Title margin="0 0 5px" level="h3">
          {title}
        </Title>
        <RichText margin="0 0 24px" text={description}></RichText>
        <SauceContainer sauces={sauces} />
      </Container>
    </S.SaucesArea>
  );
};
