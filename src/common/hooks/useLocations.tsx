import { useEffect, useState } from 'react';

import { get } from '../../config/api';
import { usePagination } from './usePagination';

export const useLocations = () => {
  const [locations, setLocations] = useState([]);

  const { pageNumber, SIZE_BY_PAGE } = usePagination(4);

  useEffect(() => {
    async function locationsFetch() {
      try {
        const { data, metaData } = await get(
          `locations/companies/1?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}`
        );
        console.log(data);
        setLocations(data);
      } catch (e) {
        console.log(e);
      }
    }
    locationsFetch();
  }, [SIZE_BY_PAGE, pageNumber]);

  return {
    locations,
  };
};
