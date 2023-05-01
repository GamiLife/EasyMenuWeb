import React, { Dispatch, SetStateAction } from 'react';

export interface ICartContext {
  isEnabledCart: boolean;
  cartProducts: ICartProduct[];
  setIsEnabledCart: (value: boolean) => void;
  setCartProducts: Dispatch<SetStateAction<ICartProduct[]>>;
  // setCartProducts: (value: ICartProduct[]) => void;
}

export interface ICartProvider {
  children: React.ReactNode;
}

export interface ICartProduct {
  title: string;
  description: string;
  imageUrl: string;
  totalPrice: number;
  quantity: number;
  cartId: number;
}

export const defaultCartValues = {
  isEnabledCart: false,
  cartProducts: [],
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
