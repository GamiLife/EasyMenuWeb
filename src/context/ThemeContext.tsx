import { createContext, useState } from 'react';
import * as React from 'react';

export interface IThemeContext {
  categoryName: string;
  idCategory: number;
  value: string;
  page: number;
  setCategoryName: (categoryName: string) => void;
  setIdCategory: (id: number) => void;
  setValue: (value: string) => void;
  setPage: (value: number) => void;
}

//GENERICS TYPESCRIPT
export const ThemeContext = createContext<IThemeContext>({
  categoryName: 'seafoods',
  idCategory: 1,
  value: '',
  page: 0,
  setCategoryName: () => {},
  setIdCategory: () => {},
  setValue: () => {},
  setPage: () => {}
});

export interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {

  const [categoryName, setCategoryName] = useState('seafoods');
  const [value, setValue] = useState('');
  const [idCategory, setIdCategory] = useState(1);
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
        setPage
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;