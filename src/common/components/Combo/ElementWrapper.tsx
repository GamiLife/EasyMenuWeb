import React from 'react';
import {
  useCalculateTotalPriceToPay,
  useProductComboCounter,
} from '../../hooks';
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
  // total: number;
  // setTotal: (arg: number) => void;
}

export const ElementWrapper = ({
  title,
  priceByUnit,
  imageUrl,
  maxItemsByRow,
  isEnableComboRow,
  handlerAddCombo,
  handlerSubstractCombo,
}: // setTotal,
// total,
IRow) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItemsByRow);

  // setTotal(total + priceByUnit * quantity);
  // console.log(priceByUnit * quantity);

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
          }}
          handleClickAdd={() => {
            handleAdd();
            handlerAddCombo();

            // handleAddPriceToUnitPrice();
          }}
          disableAddButton={isDisableAdd}
        />
      </S.OperatorsImageWrapper>
    </S.ElementWrapper>
  );
};
