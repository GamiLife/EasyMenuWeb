/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { CompanyContext } from '../../context';
import { usePagination } from './usePagination';
import { useQueryData } from './useQueryData';
import { useDebounce } from './useDebounce';
import { useSearch } from './useSearch';
import { queryParams } from '../utils/queryParams';

interface IUseFetchDishesByCategory {
  idCategory: number;
}

//TODO: Query Params implemetation on rest of hooks
export const useFetchDishesByCategory = ({
  idCategory,
}: IUseFetchDishesByCategory) => {
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { pageNumber, SIZE_BY_PAGE, setTotalItems } = usePagination(5);
  const { search } = useSearch();
  const debouncedValue = useDebounce(search, 500);

  const { data, isLoading, isError } = useQueryData({
    path: `dishes/byPagination?${queryParams({
      categoryId: `${id}`,
      page: `${pageNumber}`,
      sizeByPage: `${SIZE_BY_PAGE}`,
      searchBy: `[ "title", ${debouncedValue} ] , ["description",${debouncedValue}]`,
      searchOp: `OR`,
    })}`,
    queryKey: ['homeDishes', idCategory, pageNumber, debouncedValue],
    select: ({ data, metadata }) => {
      return {
        response: data,
        metadata,
      };
    },
  });

  React.useEffect(() => {
    if (!data?.response?.length) return;
    const {
      pagination: { totalItems },
    } = data.metadata;
    setTotalItems(totalItems);
  }, [JSON.stringify(data)]);

  return {
    data: data?.response,
    isLoading,
    showMessage: !data?.response?.length,
    isError,
  };
};
