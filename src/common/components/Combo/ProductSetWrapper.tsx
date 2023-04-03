import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { ElementWrapper } from './ElementWrapper';
import { useCombo } from '../../hooks/useCombo';
import { merge } from './utils';
import * as S from './styles';
import React from 'react';
import { TotalPrice } from '../ProductForm/styles';

interface IDishContainer {
  dishes: GetDishResponseDTO.DishInCombo[];
  sauces: GetDishResponseDTO.SauceInCombo[];
  maxItems: number;
  setSecondaryProductsTotalPrice: (arg: any) => void;
  // totalPrice: number;
}

export type IComboRow = Omit<GetDishResponseDTO.DishInCombo, 'dish'> & {
  row: GetDishResponseDTO.Dish;
};

export const ProductSetWrapper = ({
  dishes,
  sauces,
  maxItems,
  setSecondaryProductsTotalPrice,
}: // totalPrice,
IDishContainer) => {
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
        }) => (
          <Container key={id} width="full">
            <ElementWrapper
              isEnableComboRow={isEnableComboRow}
              handlerAddCombo={handlerAdd}
              handlerSubstractCombo={handlerSubstract}
              title={title}
              description={description}
              priceByUnit={priceByUnit}
              imageUrl={imageUrl}
              maxItemsByRow={maxItemsByRow}
              setSecondaryProductsTotalPrice={setSecondaryProductsTotalPrice}
              // totalPrice={totalPrice}
            />
          </Container>
        )
      )}
      {/* Add message */}
    </S.ProductSetWrapper>
  );
};
