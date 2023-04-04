import React from 'react';

export interface IProductFormContext {
  secondaryProductsTotalPrice: number;
  setSecondaryProductsTotalPrice: (value: (prev: number) => number) => void;
}

export interface IProductFormProvider {
  children: React.ReactNode;
  // product
}

export const defaultProductFormValues = {
  secondaryProductsTotalPrice: 0,
};

export const defaultProductFormSetter = {
  setSecondaryProductsTotalPrice: () => {
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
