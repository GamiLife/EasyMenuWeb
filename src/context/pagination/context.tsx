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

export const PaginationContext = React.createContext<IPaginationContext>({
  ...defaultPaginationContext,
});
