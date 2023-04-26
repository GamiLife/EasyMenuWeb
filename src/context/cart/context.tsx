import React, { Dispatch, SetStateAction } from 'react';

export interface ICartContext {
  isEnabledCart: boolean;
  cartProducts: ICartProduct[];
  setIsEnabledCart: (value: boolean) => void;
  setCartProducts: Dispatch<SetStateAction<ICartProduct[]>>;
  // setCartProducts: (value: ICartProduct[]) => void;
  // id:
  // description: string;
  // imageUrl: string;
  // price: number;
  // title: string;
}

export interface ICartProvider {
  children: React.ReactNode;
}

export interface ICartProduct {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  totalPrice: number;
  quantity: number;
}

export const defaultCartValues = {
  isEnabledCart: false,
  cartProducts: [],
  // title: '',
};

export const defaultCartSetter = {
  setIsEnabledCart: () => {
    return;
  },
  setCartProducts: () => {
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
