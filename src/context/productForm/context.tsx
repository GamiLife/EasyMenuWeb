import React, { Dispatch, SetStateAction } from 'react';

export interface IElementCombo {
  id: number;
  quantity: number;
}

/**
 * {
 *  1: [
 *  {
 *  id: 1,
 *  quantity: 0
 * },
 *  {
 *  id: 2,
 *  quantity: 0
 * }
 * ]
 *
 * }
 */

export interface IProductFormContext {
  secondaryProductsTotalPrice: number;
  isTriggerValidation: boolean;
  combosInvalid: ICombosInvalid[];
  combos: Record<number, IElementCombo[]>;
  setSecondaryProductsTotalPrice: (value: (prev: number) => number) => void;
  setIsTriggerValidation: (value: boolean) => void;
  setCombosInvalid: (combosInvalid: ICombosInvalid[]) => void;
  setElementCombo: (
    comboId: number,
    elementComboId: number,
    newQuantity: number
  ) => void;
}

export interface IProductFormProvider {
  children: React.ReactNode;
  // product
}

export interface ICombosInvalid {
  comboId: number;
  validationType: string; //'minItems'
  // message: string; //"Debes elegir al menos 4"
}

export const defaultProductFormValues = {
  secondaryProductsTotalPrice: 0,
  isTriggerValidation: false,
  combosInvalid: [],
  combos: {},
};

export const defaultProductFormSetter = {
  setSecondaryProductsTotalPrice: () => {
    return;
  },
  setIsTriggerValidation: () => {
    return;
  },
  setCombosInvalid: () => {
    return;
  },
  setElementCombo: () => {
    return;
  },
};

export const defaultProductFormContext = {
  ...defaultProductFormValues,
  ...defaultProductFormSetter,
};

export const ProductFormContext = React.createContext<IProductFormContext>({
  ...defaultProductFormContext,
});
