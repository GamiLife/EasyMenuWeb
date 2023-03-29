import React from 'react';
import { Container, Title, RichText } from '@gamiui/standard';
import productDetailsBlock from '../../blocks/productDetails-block.json';
import { Block } from '../../layouts';
import { GetDishResponseDTO } from '../../types/getDish.type';
import * as S from './styles';
import { Rows } from './Rows';

export const Combo = ({
  title,
  description,
  dishes,
  sauces,
  maxItems,
}: GetDishResponseDTO.Combo) => {
  // useProductComboCounter(maxItemsByRow);

  return (
    <S.Area
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />
      <Container>
        <Title margin="0 0 5px" level="h3">
          {title}
        </Title>
        <RichText margin="0 0 24px" text={description}></RichText>
        <Rows sauces={sauces} dishes={dishes} maxItems={maxItems} />
      </Container>
    </S.Area>
  );
};
