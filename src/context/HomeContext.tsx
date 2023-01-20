import { createContext, useState } from 'react';
import * as React from 'react';

export interface IHomeContext {
  categoryName: string;
  idCategory: number;
  setCategoryName: (categoryName: string) => void;
  setIdCategory: (id: number) => void;
}

export const defaultHomeSetter = {
  setCategoryName: () => {
    return;
  },
  setIdCategory: () => {
    return;
  },
};

export const defaultHomeValues = {
  categoryName: 'seafoods',
  idCategory: 1,
};

export const defaultHomeContext = {
  ...defaultHomeSetter,
  ...defaultHomeValues,
};

export const HomeContext = createContext<IHomeContext>({
  ...defaultHomeContext,
});

export interface IHomeProvider {
  children: React.ReactNode;
}

const HomeProvider = ({ children }: IHomeProvider) => {
  const [categoryName, setCategoryName] = useState('seafoods');
  const [idCategory, setIdCategory] = useState(1);

  return (
    <HomeContext.Provider
      value={{
        categoryName,
        idCategory,
        setCategoryName,
        setIdCategory,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
