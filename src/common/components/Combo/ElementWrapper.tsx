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
  setTotalPrice: (arg: any) => void;
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
  setTotalPrice,
}: // setTotal,
// total,
IRow) => {
  const {
    quantity,
    disableAdd,
    disableSubtract,
    handleSubtract,
    handleAdd,
    handleAddPriceToMainProductPrice,
    price,
  } = useProductComboCounter(maxItemsByRow);

  // setTotal(total + priceByUnit * quantity);
  // const [price, setPrice] = React.useState(0);
  // console.log(priceByUnit * quantity);
  // console.log(price);
  // setTotalPrice((prev: number) => prev + 1);

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

            // setPrice((quantity + 1) * priceByUnit);
            handleAddPriceToMainProductPrice(priceByUnit);
            // console.log(quantity * priceByUnit);

            setTotalPrice(
              (prev: number) => prev + priceByUnit * (quantity + 1)
            );
          }}
          disableAddButton={isDisableAdd}
        />
      </S.OperatorsImageWrapper>
    </S.ElementWrapper>
  );
};
