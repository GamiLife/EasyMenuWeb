import React from 'react';

import { useProductComboCounter } from '../../hooks';
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
  setTotalPrice: (arg: any) => void;
}

export const ElementWrapper = ({
  title,
  priceByUnit,
  imageUrl,
  maxItemsByRow,
  isEnableComboRow,
  handlerAddCombo,
  handlerSubstractCombo,
  setTotalPrice,
}: IRow) => {
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
          margin={'auto'}
          width={'45%'}
          quantity={quantity}
          disableSubtractButton={disableSubtract}
          handleClickSubtract={() => {
            handleSubtract();
            handlerSubstractCombo();
            setTotalPrice((prev: number) => prev - priceByUnit);
          }}
          handleClickAdd={() => {
            handleAdd();
            handlerAddCombo();
            setTotalPrice((prev: number) => prev + priceByUnit);
          }}
          disableAddButton={isDisableAdd}
        />
      </S.OperatorsImageWrapper>
    </S.ElementWrapper>
  );
};
