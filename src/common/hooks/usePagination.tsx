import { useContext, useState } from 'react';

import { PaginationContext } from '../../context';

export const usePagination = (size_by_page: number) => {
  const [totalItems, setTotalItems] = useState(0);
  const { page, setPage } = useContext(PaginationContext);

  const SIZE_BY_PAGE = size_by_page;
  const pageNumber = 1 + page;
  const numberPages = Math.ceil(totalItems / SIZE_BY_PAGE);
  const handleChangePage = (page: number) => setPage(page);

  return {
    SIZE_BY_PAGE,
    pageNumber,
    numberPages,
    handleChangePage,
    setTotalItems,
  };
};
