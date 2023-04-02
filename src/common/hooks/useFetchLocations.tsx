/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { CompanyContext } from '../../context/company';
import { usePagination } from './usePagination';
import { useQueryData } from './useQueryData';

export const useFetchLocations = () => {
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { pageNumber, setTotalItems, SIZE_BY_PAGE } = usePagination(4);

  const { data, isLoading, isError } = useQueryData({
    path: `locations/companies/${id}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}`,
    queryKey: ['locations', SIZE_BY_PAGE, pageNumber, id],
    select: ({ data, metaData }) => {
      return {
        response: data,
        metaData,
      };
    },
  });

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
    isError,
    // page,
    // handleChangePage,
    // locations,
    // numberPages,
  };
};
