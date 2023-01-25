import { useEffect, useState } from 'react';

import { usePagination } from './usePagination';
import { ILocation } from '../components/Location';
import { useToggle } from './useToggle';
import { get } from '../../config/api';

export const useFetchLocations = () => {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const {
    page,
    numberPages,
    pageNumber,
    SIZE_BY_PAGE,
    setTotalItems,
    handleChangePage,
  } = usePagination(4);
  const { isVisible: isLoading, handleToggle: setIsLoading } = useToggle({
    defaultVisible: true,
  });

  useEffect(() => {
    async function locationsFetch() {
      try {
        const { data, metaData } = await get(
          `locations/companies/1?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}`
        );
        setLocations(data);
        setTotalItems(metaData.pagination.totalItems);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    locationsFetch();
  }, [SIZE_BY_PAGE, pageNumber]);

  return {
    page,
    locations,
    numberPages,
    isLoading,
    handleChangePage,
  };
};
