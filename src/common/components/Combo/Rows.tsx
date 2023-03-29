import { Container } from '@gamiui/standard';
import { useCombo } from '../../hooks/useCombo';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { Row } from './Row';
import * as S from './styles';
import { merge } from './utils';

interface IDishContainer {
  dishes: GetDishResponseDTO.DishInCombo[];
  sauces: GetDishResponseDTO.SauceInCombo[];
  maxItems: number;
}

export type IComboRow = Omit<GetDishResponseDTO.DishInCombo, 'dish'> & {
  row: GetDishResponseDTO.Dish;
};

export const Rows = ({ dishes, sauces, maxItems }: IDishContainer) => {
  const { isEnableComboRow, handlerAdd, handlerSubstract } = useCombo({
    maxItems,
  });

  const rows = merge(dishes, sauces);
  return (
    <S.Row>
      {rows.map(
        ({
          id,
          row: { title, description, priceByUnit, imageUrl },
          maxItemsByRow,
        }) => (
          <Container key={id} width="full">
            <Row
              isEnableComboRow={isEnableComboRow}
              handlerAddCombo={handlerAdd}
              handlerSubstractCombo={handlerSubstract}
              title={title}
              description={description}
              priceByUnit={priceByUnit}
              imageUrl={imageUrl}
              maxItemsByRow={maxItemsByRow}
            />
          </Container>
        )
      )}
    </S.Row>
  );
};
