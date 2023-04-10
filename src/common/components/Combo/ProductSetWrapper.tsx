import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { ElementWrapper } from './ElementWrapper';
import { useCombo } from '../../hooks/useCombo';
import { merge } from './utils';
import * as S from './styles';

interface IDishContainer {
  dishes: GetDishResponseDTO.DishInCombo[];
  sauces: GetDishResponseDTO.SauceInCombo[];
  maxItems: number;
}

export type IComboRow = Omit<GetDishResponseDTO.DishInCombo, 'dish'> & {
  row: GetDishResponseDTO.Dish;
};

export const ProductSetWrapper = ({
  dishes,
  sauces,
  maxItems,
}: IDishContainer) => {
  const { isEnableComboRow, handlerAdd, handlerSubstract } = useCombo({
    maxItems,
  });

  const rows = merge(dishes, sauces);

  return (
    <S.ProductSetWrapper>
      {rows.map(
        ({
          id,
          row: { title, description, priceByUnit, imageUrl },
          maxItemsByRow,
        }) => {
          return (
            <Container key={id} width="full">
              {priceByUnit ? (
                <ElementWrapper
                  isEnableComboRow={isEnableComboRow}
                  handlerAddCombo={handlerAdd}
                  handlerSubstractCombo={handlerSubstract}
                  title={title}
                  description={description}
                  priceByUnit={priceByUnit}
                  imageUrl={imageUrl}
                  maxItemsByRow={maxItemsByRow}
                />
              ) : (
                <S.SelectionCheck>
                  <S.Check>
                    <S.CheckInput type="checkbox" id={title} name={title} />
                    <S.CheckboxLabel htmlFor={title}></S.CheckboxLabel>
                  </S.Check>
                  <S.ProductNameWithoutPrice htmlFor={title}>
                    {title}
                  </S.ProductNameWithoutPrice>
                </S.SelectionCheck>
              )}
            </Container>
          );
        }
      )}
      {/* Add message */}
    </S.ProductSetWrapper>
  );
};
