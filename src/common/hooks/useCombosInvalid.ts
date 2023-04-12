import React, { useEffect } from 'react';

import { ICombosInvalid, ProductFormContext } from '../../context/productForm';

export interface IUseComboInvalid {
  minItems: number;
  comboCounter: number;
  id: number;
}

export const useCombosInvalid = ({
  minItems,
  comboCounter,
  id,
}: IUseComboInvalid) => {
  const { combosInvalid, setCombosInvalid } =
    React.useContext(ProductFormContext);

  console.log(combosInvalid);

  function addFromCombosInvalid(combosInvalidItem: ICombosInvalid) {
    const uniqueIds = new Set();

    const unique = [...combosInvalid, combosInvalidItem].filter(
      (comboInvalid) => {
        const isDuplicate = uniqueIds.has(comboInvalid.comboId);

        uniqueIds.add(comboInvalid.comboId);

        if (!isDuplicate) {
          return true;
        }
        return false;
      }
    );
    console.log(unique);
    setCombosInvalid(unique);
  }

  function clearFromCombosInvalid(comboId: number) {
    const result = combosInvalid.filter(
      (comboInvalid) => comboInvalid.comboId !== comboId
    );
    setCombosInvalid(result);
  }

  function verifyIsComboInvalid(comboId: number) {
    const result = combosInvalid.find(
      (comboInvalid) => comboInvalid.comboId === comboId
    );
    if (!result) {
      return '';
    } else {
      return `Debes elegir al menos ${minItems}`;
    }
  }

  useEffect(() => {
    console.log(id);
    if (comboCounter === 0) return;
    if (comboCounter < minItems) {
      // console.log(`Debe elegir al menos ${minItems} elementos`);
      addFromCombosInvalid({
        comboId: id,
        message: '',
        validationType: 'minItems',
      });
    } else {
      console.log('Clear message');
      clearFromCombosInvalid(id);
    }
  }, [comboCounter]);
  return {
    addFromCombosInvalid,
    clearFromCombosInvalid,
    verifyIsComboInvalid,
  };
};
