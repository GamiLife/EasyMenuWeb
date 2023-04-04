import React from 'react';

import { useProductComboCounter } from '../../hooks';
import { ProductFormContext } from '../../../context/productForm';
import { ProductOperators } from '../ProductOperators';
import * as S from './styles';

interface IRow {
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
  maxItemsByRow: number;
  isEnableComboRow: boolean;
  handlerAddCombo: () => void;
  handlerSubstractCombo: () => void;
}

export const ElementWrapper = ({
  title,
  priceByUnit,
  imageUrl,
  maxItemsByRow,
  isEnableComboRow,
  handlerAddCombo,
  handlerSubstractCombo,
}: IRow) => {
  const { setSecondaryProductsTotalPrice } =
    React.useContext(ProductFormContext);

  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItemsByRow);

  const isDisableAdd = disableAdd || !isEnableComboRow;

  return (
    <S.ElementWrapper>
      <S.ProductName>
        {title}
        <S.ProductPrice> + {priceByUnit}</S.ProductPrice>
      </S.ProductName>
      <S.OperatorsImageWrapper>
        <S.ProductImage imageUrl={imageUrl} alt={title} height="42px" />
        <ProductOperators
          margin="auto"
          width="45%"
          quantity={quantity}
          disableSubtractButton={disableSubtract}
          handleClickSubtract={() => {
            setSecondaryProductsTotalPrice(
              (prev: number) => prev - priceByUnit
            );
            handleSubtract();
            handlerSubstractCombo();
          }}
          handleClickAdd={() => {
            setSecondaryProductsTotalPrice(
              (prev: number) => prev + priceByUnit
            );
            handleAdd();
            handlerAddCombo();
          }}
          disableAddButton={isDisableAdd}
        />
      </S.OperatorsImageWrapper>
    </S.ElementWrapper>
  );
};
