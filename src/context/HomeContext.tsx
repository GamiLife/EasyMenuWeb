import { createContext, useState } from 'react';
import * as React from 'react';
import { useLocalStorage } from '../common/hooks';

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
  const [idCategory, setIdCategory] = useLocalStorage<number>(
    'categorySelectedId',
    defaultHomeValues.idCategory
  );
  const [categoryName, setCategoryName] = useState(
    defaultHomeValues.categoryName
  );
  // const [idCategory, setIdCategory] = useState(1);

  // React.useEffect(() => {
  //   (() => {
  //     if (typeof window === 'undefined') {
  //       return;
  //     }

  //     try {
  //       const item = window.localStorage.getItem('categorySelectedId');
  //       const value = item ? JSON.parse(item) : 1;
  //       setIdCategory(value);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

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
