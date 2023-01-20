import { createContext, useState } from 'react';
import * as React from 'react';

export interface IPaginationContext {
  value: string;
  page: number;
  setValue: (value: string) => void;
  setPage: (value: number) => void;
}

export const defaultPaginationSetter = {
  setValue: () => {
    return;
  },
  setPage: () => {
    return;
  },
};

export const defaultPaginationValues = {
  value: '',
  page: 0,
};

export const defaultPaginationContext = {
  ...defaultPaginationSetter,
  ...defaultPaginationValues,
};

export const PaginationContext = createContext<IPaginationContext>({
  ...defaultPaginationContext,
});

export interface IPaginationProvider {
  children: React.ReactNode;
}

const PaginationProvider = ({ children }: IPaginationProvider) => {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        value,
        page,
        setValue,
        setPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
