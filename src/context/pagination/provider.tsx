import * as React from 'react';

import {
  defaultPaginationValues,
  IPaginationProvider,
  PaginationContext,
} from './context';
import { useLocalStorage } from '../../common/hooks';

const PaginationProvider = ({ children }: IPaginationProvider) => {
  const [search, setSearch] = React.useState(defaultPaginationValues.search);
  const [totalItems, setTotalItems] = React.useState(
    defaultPaginationValues.totalItems
  );

  const [page, setPage] = useLocalStorage<number>(
    'selectedPage',
    defaultPaginationValues.page
  );

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
