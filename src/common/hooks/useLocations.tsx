import { useContext, useEffect, useState } from 'react';

import { HomeContext } from '../../context';
import { usePagination } from './usePagination';
import { IProduct } from '../components/Product';
import { useToggle } from './useToggle';
import { get } from '../../config/api';

export const useLocations = () => {
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const { idCategory } = useContext(HomeContext);

  const {
    numberPages,
    page,
    pageNumber,
    SIZE_BY_PAGE,
    setTotalItems,
    handleChangePage,
  } = usePagination(3);
  const { isVisible: isLoading, handleToggle: setIsLoading } = useToggle({
    defaultVisible: true,
  });
  const { isVisible: showMessage, handleToggle: setShowMessage } = useToggle({
    defaultVisible: false,
  });

  useEffect(() => {
    async function locationsFetch() {
      try {
        const { data, metaData } = await get(
          `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}`
        );
        // const { data, metaData } = await get(
        //   `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`
        // );
        setProductsByPage(data);
        setTotalItems(metaData.pagination.totalItems);
        setIsLoading(false);
        setShowMessage(false);
        !data.length && setShowMessage(true);
      } catch (e) {
        console.log(e);
      }
    }
    locationsFetch();
  }, [
    SIZE_BY_PAGE,
    idCategory,
    pageNumber,
    setIsLoading,
    setShowMessage,
    setTotalItems,
  ]);

  return {
    page,
    productsByPage,
    numberPages,
    isLoading,
    showMessage,
    handleChangePage,
  };
};
