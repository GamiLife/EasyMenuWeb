import React from 'react';

export interface IProductFormContext {
  secondaryProductsTotalPrice: number;
  isTriggerValidation: boolean;
  combosInvalid: ICombosInvalid[];
  setSecondaryProductsTotalPrice: (value: (prev: number) => number) => void;
  setIsTriggerValidation: (value: boolean) => void;
  setCombosInvalid: (value: ICombosInvalid[]) => void;
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
};

export const defaultProductFormContext = {
  ...defaultProductFormValues,
  ...defaultProductFormSetter,
};

export const ProductFormContext = React.createContext<IProductFormContext>({
  ...defaultProductFormContext,
});
