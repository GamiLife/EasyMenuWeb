/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { CompanyContext } from '../../context/company';
import { usePagination } from './usePagination';
import { useQueryData } from './useQueryData';
import { ILocation } from '../components/Location';
import { useToggle } from './useToggle';
import { get } from '../../config/api';

export const useFetchLocations = () => {
  // const [locations, setLocations] = React.useState<ILocation[]>([]);
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const {
    pageNumber,
    SIZE_BY_PAGE,
    setTotalItems,
    // page,
    // numberPages,
    // handleChangePage,
  } = usePagination(4);
  // const { handleToggle: setIsLoading } = useToggle({
  //   defaultVisible: true,
  // });
  // const { isVisible: isLoading, handleToggle: setIsLoading } = useToggle({
  //   defaultVisible: true,
  // });

  // React.useEffect(() => {
  //   async function locationsFetch() {
  //     try {
  //       const { data, metaData } = await get(
  //         `locations/companies/${id}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}`
  //       );
  //       setLocations(data);
  //       setTotalItems(metaData.pagination.totalItems);
  //       setIsLoading(false);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   locationsFetch();
  // }, [SIZE_BY_PAGE, pageNumber, setIsLoading, setTotalItems, id]);

  const { data, isLoading, isError } = useQueryData(
    `locations/companies/${id}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}`,
    ['locations', SIZE_BY_PAGE, pageNumber, id],
    // ['locations', SIZE_BY_PAGE, pageNumber, setIsLoading, setTotalItems, id],
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
    isError,
    // page,
    // handleChangePage,
    // locations,
    // numberPages,
  };
};
