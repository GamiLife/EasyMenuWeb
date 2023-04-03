import React from 'react';

export interface IProductFormContext {
  totalPrice: number;

  setTotalPrice: (value: number) => void;
}

export interface IProductFormProvider {
  children: React.ReactNode;
  // product
}

export const defaultProductFormValues = {
  totalPrice: 0,
};

export const defaultProductFormSetter = {
  setTotalPrice: () => {
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
