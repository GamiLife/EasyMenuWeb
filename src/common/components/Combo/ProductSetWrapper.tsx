import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { ElementWrapper } from './ElementWrapper';
import { useCombo } from '../../hooks/useCombo';
import { merge } from './utils';
import * as S from './styles';
import { useEffect } from 'react';
import { useCombosInvalid } from '../../hooks';

interface IDishContainer {
  id: number;
  dishes: GetDishResponseDTO.DishInCombo[];
  sauces: GetDishResponseDTO.SauceInCombo[];
  maxItems: number;
  minItems: number;
}

export type IComboRow = Omit<GetDishResponseDTO.DishInCombo, 'dish'> & {
  row: GetDishResponseDTO.Dish;
};

export const ProductSetWrapper = ({
  id,
  dishes,
  sauces,
  maxItems,
  minItems,
}: IDishContainer) => {
  const { comboCounter, isEnableComboRow, handlerAdd, handlerSubstract } =
    useCombo({
      maxItems,
    });
  const { addFromCombosInvalid } = useCombosInvalid({ minItems });

  // const {isEnableComboRow} = useCombo({ minItems });

  const rows = merge(dishes, sauces);

  useEffect(() => {
    if (comboCounter < minItems) {
      console.log(`Debe elegir al menos ${minItems} elementos`);
      addFromCombosInvalid({
        comboId: id,
        message: '',
        validationType: 'minItems',
      });
      // addFromCombosInvalid({ comboId, message, validationType });
      // setCombosInvalid([
      //   ...combosInvalid,
      //   { comboId, message, validationType },
      // ]);
    } else {
      // clearFromCombosInvalid(comboId);
      console.log('Clear message');
    }
    // function validateComboCounter() {
    //   if (comboCounter < minItems) {
    //     // console.log('Show message missing items!');
    //     // addFromCombosInvalid({ comboId, message, validationType });
    //     setCombosInvalid([
    //       ...combosInvalid,
    //       { comboId, message, validationType },
    //     ]);
    //   } else {
    //     clearFromCombosInvalid(comboId);
    //   }
    // }
    // validateComboCounter();
  }, [comboCounter]);

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
