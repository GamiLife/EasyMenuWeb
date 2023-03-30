import React from 'react';
import { useProductComboCounter } from './useProductComboCounter';

export interface IUseCalculateTotalPriceToPay {
  priceByUnit: number;
  quantity: number;
}

export const useCalculateTotalPriceToPay = ({
  priceByUnit,
  quantity,
}: IUseCalculateTotalPriceToPay) => {
  // const { quantity } = useProductComboCounter();
  const [totalPrice, setTotalPrice] = React.useState(priceByUnit);
  function handleAddPriceToUnitPrice() {
    setTotalPrice(totalPrice + (quantity + 1) * priceByUnit);
  }

  return {
    totalPrice,
    setTotalPrice,
    handleAddPriceToUnitPrice,
  };
};
