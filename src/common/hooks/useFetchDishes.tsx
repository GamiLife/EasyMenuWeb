import { useEffect, useState } from 'react';

import { usePagination } from './usePagination';
import { IProduct } from '../components/Product';
import { useToggle } from './useToggle';
import { useDebounce } from './useDebounce';
import { useSearch } from './useSearch';
import { get } from '../../config/api';

interface IUseFetchDishes {
  idCategory: number;
}

export const useFetchDishes = ({ idCategory }: IUseFetchDishes) => {
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);

  const {
    page,
    numberPages,
    pageNumber,
    SIZE_BY_PAGE,
    setTotalItems,
    handleChangePage,
  } = usePagination(5);
  const { isVisible: isLoading, handleToggle: setIsLoading } = useToggle({
    defaultVisible: true,
  });
  const { isVisible: showMessage, handleToggle: setShowMessage } = useToggle({
    defaultVisible: false,
  });
  const { search } = useSearch();
  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    async function dishesFetch() {
      try {
        const { data, metaData } = await get(
          `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`
        );
        setProductsByPage(data);
        setTotalItems(metaData.pagination.totalItems);
        setIsLoading(false);
        setShowMessage(false);
        !data.length && setShowMessage(true);
      } catch (e) {
        console.log(e);
      }
    }
    dishesFetch();
  }, [
    SIZE_BY_PAGE,
    debouncedValue,
    idCategory,
    pageNumber,
    setIsLoading,
    setShowMessage,
    setTotalItems,
  ]);

  return {
    page,
    numberPages,
    productsByPage,
    isLoading,
    showMessage,
    handleChangePage,
  };
};
