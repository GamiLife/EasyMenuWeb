import React from 'react';

export interface ICartContext {
  title: string;
}

export interface ICartProvider {
  children: React.ReactNode;
}

export const defaultCartValues = {
  title: '',
};

export const defaultCartSetter = {};

export const defaultCartContext = {
  ...defaultCartValues,
  ...defaultCartSetter,
};

export const CartContext = React.createContext<ICartContext>({
  ...defaultCartContext,
});
