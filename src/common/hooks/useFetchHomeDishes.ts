/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { CompanyContext } from '../../context';
import { usePagination } from './usePagination';
import { useQueryData } from './useQueryData';
import { useDebounce } from './useDebounce';
import { useSearch } from './useSearch';

interface IUseFetchDishes {
  idCategory: number;
}

export const useFetchHomeDishes = ({ idCategory }: IUseFetchDishes) => {
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { pageNumber, SIZE_BY_PAGE, setTotalItems } = usePagination(5);
  const { search } = useSearch();
  const debouncedValue = useDebounce(search, 500);

  const { data, isLoading, isError } = useQueryData(
    `dishes/byPagination?categoryId=${idCategory}&companyId=${id}&page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`,
    ['homeDishes', idCategory, pageNumber, debouncedValue],
    ({ data, metaData }) => {
      return {
        response: data,
        metaData,
      };
    }
  );

  React.useEffect(() => {
    if (!data?.response?.length) return;
    const {
      pagination: { totalItems },
    } = data.metaData;
    setTotalItems(totalItems);
  }, [JSON.stringify(data)]);

  return {
    data: data?.response,
    isLoading,
    showMessage: !data?.response?.length,
    isError,
  };
};
