import { useState } from 'react';

export interface IUseCombo {
  maxItems: number;
}

export const useCombo = ({ maxItems }: IUseCombo) => {
  const [comboCounter, setComboCounter] = useState(0);
  console.log(comboCounter);
  const isEnableComboRow = maxItems ? comboCounter < maxItems : true;

  const handlerAdd = () => setComboCounter((prev) => prev + 1);

  const handlerSubstract = () => setComboCounter((prev) => prev - 1);

  return {
    isEnableComboRow,
    handlerAdd,
    handlerSubstract,
  };
};
