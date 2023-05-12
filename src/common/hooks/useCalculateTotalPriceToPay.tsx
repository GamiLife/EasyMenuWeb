import React from 'react';

export interface IUseCalculateTotalPriceToPay {
  priceByUnit: number;
  quantity: number;
}

export const useCalculateTotalPriceToPay = ({
  priceByUnit,
  quantity,
}: IUseCalculateTotalPriceToPay) => {
  const [totalPrice, setTotalPrice] = React.useState(priceByUnit);
  function handleAddPriceToMainProductPrice() {
    setTotalPrice(totalPrice + (quantity + 1) * priceByUnit);
  }

  return {
    totalPrice,
    setTotalPrice,
    handleAddPriceToMainProductPrice,
  };
};
