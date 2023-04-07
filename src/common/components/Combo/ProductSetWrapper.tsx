import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { ElementWrapper } from './ElementWrapper';
import { useToggle } from '../../hooks';
import { useCombo } from '../../hooks/useCombo';
import { merge } from './utils';
import * as S from './styles';
import React from 'react';

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
  const { isVisible: showCheck, handleToggle: setShowCheck } = useToggle({
    defaultVisible: false,
  });

  const rows = merge(dishes, sauces);

  return (
    <S.ProductSetWrapper>
      {rows.map(
        ({
          id,
          row: { id: idProduct, title, description, priceByUnit, imageUrl },
          maxItemsByRow,
        }) => {
          priceByUnit = 0;
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
                <S.SelectionCheck onClick={() => setShowCheck(!showCheck)}>
                  <S.Check>
                    <input
                      type="checkbox"
                      value={title}
                      style={{ display: 'none', backgroundColor: 'white' }}
                    />
                    <S.CheckboxLabel
                      id={title}
                      htmlFor={title}
                      className={showCheck ? 'check' : ''}
                    ></S.CheckboxLabel>
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
