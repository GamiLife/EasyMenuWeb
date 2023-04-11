import { useEffect, useState } from 'react';

export interface IUseCombo {
  maxItems: number;
}

export const useCombo = ({ maxItems }: IUseCombo) => {
  const [comboCounter, setComboCounter] = useState(0);
  const isEnableComboRow = maxItems ? comboCounter < maxItems : true;

  const handlerAdd = () => setComboCounter((prev) => prev + 1);

  const handlerSubstract = () => setComboCounter((prev) => prev - 1);

  // useEffect(() => {
  //   function validateComboCounter() {
  //     if (comboCounter < minItems) {
  //       // console.log('Show message missing items!');
  //       // addFromCombosInvalid({ comboId, message, validationType });
  //       setCombosInvalid([
  //         ...combosInvalid,
  //         { comboId, message, validationType },
  //       ]);
  //     } else {
  //       clearFromCombosInvalid(comboId);
  //     }
  //   }
  //   validateComboCounter();
  // }, [comboCounter]);

  return {
    isEnableComboRow,
    handlerAdd,
    handlerSubstract,
  };
};
