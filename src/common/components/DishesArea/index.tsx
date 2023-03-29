import { Container, RichText, Title } from '@gamiui/standard';

import productDetailsBlock from '../../blocks/productDetails-block.json';
import { useFetchDishById } from '../../hooks';
import { DishContainer } from '../DishContainer';
import { Block } from '../../layouts';
import * as S from './styles';

export const DishesArea = () => {
  const {
    response: {
      data: { combos },
    },
  } = useFetchDishById();

  const { title, description, maxItems, dishes } = combos[1];
  console.log(maxItems);

  return (
    <S.DishesArea
      component={Container}
      blockId={productDetailsBlock.CONTAINER_SELECTION_AREA}
    >
      <Block.Tooltip blockId={productDetailsBlock.CONTAINER_SELECTION_AREA} />
      <Container>
        <Title margin="0 0 5px" level="h3">
          {title}
        </Title>
        <RichText margin="0 0 24px" text={description}></RichText>
        <DishContainer dishes={dishes} />
      </Container>
    </S.DishesArea>
  );
};
