import { useContext } from 'react';

import { PaginationContext } from '../../context/pagination';

export const useSearch = () => {
  const { search, setSearch } = useContext(PaginationContext);
  const handleChangeSearch = (newValue: string) => setSearch(newValue);

  return {
    search,
    setSearch,
    handleChangeSearch,
  };
};
