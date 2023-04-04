import React from 'react';
import { Container, RichText } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { ProductSetWrapper } from './ProductSetWrapper';
import productDetailsBlock from '../../blocks/productDetails-block.json';
import { Block } from '../../layouts';
import * as S from './styles';

export const Combo = ({
  title,
  description,
  dishes,
  sauces,
  maxItems,
  minItems,
}: GetDishResponseDTO.Combo) => {
  return (
    <S.ComboArea
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />
      <Container>
        <S.ComboAreaTitle margin="0 0 5px" level="h3">
          {title}
        </S.ComboAreaTitle>
        <RichText margin="0 0 24px" text={description}></RichText>
        <ProductSetWrapper
          sauces={sauces}
          dishes={dishes}
          maxItems={maxItems}
        />
      </Container>
    </S.ComboArea>
  );
};
