import { createContext, useState } from 'react';
import * as React from 'react';

export interface IPaginationContext {
  search: string;
  page: number;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
}

export interface IPaginationProvider {
  children: React.ReactNode;
}

export const defaultPaginationSetter = {
  setSearch: () => {
    return;
  },
  setPage: () => {
    return;
  },
};

export const defaultPaginationValues = {
  search: '',
  page: 0,
};

export const defaultPaginationContext = {
  ...defaultPaginationSetter,
  ...defaultPaginationValues,
};

export const PaginationContext = createContext<IPaginationContext>({
  ...defaultPaginationContext,
});

const PaginationProvider = ({ children }: IPaginationProvider) => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        search,
        page,
        setSearch,
        setPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
