import React from 'react';

export interface ICartContext {
  isEnabledCart: boolean;
  setIsEnabledCart: (value: boolean) => void;
  // id:
  // description: string;
  // imageUrl: string;
  // price: number;
  // title: string;
}

export interface ICartProvider {
  children: React.ReactNode;
}

export const defaultCartValues = {
  isEnabledCart: false,
  // title: '',
};

export const defaultCartSetter = {
  setIsEnabledCart: () => {
    return;
  },
};

export const defaultCartContext = {
  ...defaultCartValues,
  ...defaultCartSetter,
};

export const CartContext = React.createContext<ICartContext>({
  ...defaultCartContext,
});
