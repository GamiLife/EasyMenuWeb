import React from 'react';

export interface IHomeContext {
  categoryName: string;
  idCategory: number;
  setCategoryName: (categoryName: string) => void;
  setIdCategory: (id: number) => void;
}

export interface IHomeProvider {
  children: React.ReactNode;
}

export const defaultHomeValues = {
  categoryName: 'sea foods',
  idCategory: 1,
};

export const defaultHomeSetter = {
  setCategoryName: () => {
    return;
  },
  setIdCategory: () => {
    return;
  },
};

export const defaultHomeContext = {
  ...defaultHomeValues,
  ...defaultHomeSetter,
};

export const HomeContext = React.createContext<IHomeContext>({
  ...defaultHomeContext,
});
