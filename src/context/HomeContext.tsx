import { createContext, useState } from 'react';
import * as React from 'react';

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
  categoryName: 'seafoods',
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

export const HomeContext = createContext<IHomeContext>({
  ...defaultHomeContext,
});

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
