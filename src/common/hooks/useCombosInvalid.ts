import React from 'react';

import { ICombosInvalid, ProductFormContext } from '../../context/productForm';

export interface IUseComboInvalid {
  minItems: number;
}

export const useCombosInvalid = ({ minItems }: IUseComboInvalid) => {
  const { combosInvalid, setCombosInvalid } =
    React.useContext(ProductFormContext);

  console.log(combosInvalid);

  function addFromCombosInvalid(combosInvalidItem: ICombosInvalid) {
    setCombosInvalid([...combosInvalid, combosInvalidItem]);
  }

  function clearFromCombosInvalid(comboId: number) {
    const result = combosInvalid.filter(
      (comboInvalid) => comboInvalid.comboId !== comboId
    );
    return result;
  }

  function verifyIsComboInvalid(comboId: number) {
    if (combosInvalid.length > 0) {
      return '';
    } else {
      return `Debes elegir al menos ${minItems}`;
    }
  }

  // verifyIsComboInvalid(comboId): string

  return {
    addFromCombosInvalid,
    clearFromCombosInvalid,
    verifyIsComboInvalid,
  };
};

// function addFromCombosInvalid({ comboId, message, validationType });
