import { useContext } from 'react';

import { PaginationContext } from '../../context/pagination';

export const usePagination = (size_by_page: number) => {
  const { page, totalItems, setPage, setTotalItems } =
    useContext(PaginationContext);

  const SIZE_BY_PAGE = size_by_page;
  const pageNumber = 1 + page;
  const numberPages = Math.ceil(totalItems / SIZE_BY_PAGE);
  const handleChangePage = (page: number) => setPage(page);

  return {
    page,
    SIZE_BY_PAGE,
    pageNumber,
    numberPages,
    handleChangePage,
    setTotalItems,
  };
};
