import React from 'react';

import { ICombosInvalid, ProductFormContext } from '../../context/productForm';

export interface IUseCombosInvalid {
  minItems: number;
  comboCounter: number;
  id: number;
}

export const useCombosInvalid = ({
  minItems,
  comboCounter,
  id,
}: IUseCombosInvalid) => {
  const { combosInvalid, setCombosInvalid } =
    React.useContext(ProductFormContext);

  function addToCombosInvalid(combosInvalidItem: ICombosInvalid) {
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

  React.useEffect(() => {
    if (comboCounter === 0) return;
    if (comboCounter < minItems) {
      addToCombosInvalid({
        comboId: id,
        message: '',
        validationType: 'minItems',
      });
    } else {
      clearFromCombosInvalid(id);
    }
  }, [comboCounter]);
  return {
    verifyIsComboInvalid,
  };
};
