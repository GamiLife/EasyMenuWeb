import { createContext, useState } from 'react';
import * as React from 'react';

//HomeContext
export interface IThemeContext {
  categoryName: string;
  idCategory: number;
  setCategoryName: (categoryName: string) => void;
  setIdCategory: (id: number) => void;

  value: string;
  page: number;
  setValue: (value: string) => void;
  setPage: (value: number) => void;
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

export const defaultPaginationValues = {
  value: '',
  page: 0,
  setValue: () => {
    return;
  },
  setPage: () => {
    return;
  },
};

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  ...defaultHomeContext,
  ...defaultPaginationValues,
});

export interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [categoryName, setCategoryName] = useState('seafoods');
  const [idCategory, setIdCategory] = useState(1);

  const [value, setValue] = useState('');
  const [page, setPage] = useState(0);

  return (
    <ThemeContext.Provider
      value={{
        categoryName,
        idCategory,
        value,
        page,
        setCategoryName,
        setIdCategory,
        setValue,
        setPage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
