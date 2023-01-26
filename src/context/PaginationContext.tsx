import { createContext, useState } from 'react';
import * as React from 'react';

export interface IPaginationContext {
  search: string;
  page: number;
  totalItems: number;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setTotalItems: (value: number) => void;
}

export interface IPaginationProvider {
  children: React.ReactNode;
}

export const defaultPaginationValues = {
  search: '',
  page: 0,
  totalItems: 0,
};

export const defaultPaginationSetter = {
  setSearch: () => {
    return;
  },
  setPage: () => {
    return;
  },
  setTotalItems: () => {
    return;
  },
};

export const defaultPaginationContext = {
  ...defaultPaginationValues,
  ...defaultPaginationSetter,
};

export const PaginationContext = createContext<IPaginationContext>({
  ...defaultPaginationContext,
});

const PaginationProvider = ({ children }: IPaginationProvider) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        totalItems,
        search,
        page,
        setSearch,
        setPage,
        setTotalItems,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
