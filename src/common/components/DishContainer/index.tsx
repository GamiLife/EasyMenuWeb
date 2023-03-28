import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { DishInCombo } from '../DishInCombo';
import * as S from './styles';

interface IDishContainer {
  dishes: GetDishResponseDTO.DishInCombo[];
}

export const DishContainer = ({ dishes }: IDishContainer) => {
  return (
    <S.DishContainer>
      {dishes.map(
        ({ id, dish, maxItemsByRow }: GetDishResponseDTO.DishInCombo) => {
          const { title, description, priceByUnit, imageUrl } = dish;
          return (
            <Container key={id} width="full">
              <DishInCombo
                id={id}
                title={title}
                description={description}
                priceByUnit={priceByUnit}
                imageUrl={imageUrl}
              />
            </Container>
          );
        }
      )}
    </S.DishContainer>
  );
};
