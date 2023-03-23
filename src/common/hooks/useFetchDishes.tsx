/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { usePagination } from './usePagination';
import { useDebounce } from './useDebounce';
import { useToggle } from './useToggle';
import { useSearch } from './useSearch';
import { IProduct } from '../components/Product';
import { get } from '../../config/api';
import { useQueryData } from './useQueryData';

interface IUseFetchDishes {
  idCategory: number;
}

export const useFetchDishes = ({ idCategory }: IUseFetchDishes) => {
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);

  const { pageNumber, SIZE_BY_PAGE, setTotalItems, totalItems } =
    usePagination(5);
  const { isVisible: isLoading, handleToggle: setIsLoading } = useToggle({
    defaultVisible: true,
  });
  const { isVisible: showMessage, handleToggle: setShowMessage } = useToggle({
    defaultVisible: false,
  });
  const { search } = useSearch();
  const debouncedValue = useDebounce(search, 500);

  // useEffect(() => {
  //   async function dishesFetch() {
  //     try {
  //       const { data, metaData } = await get(
  //         `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`
  //       );
  //       // const result = await get(
  //       //   `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`
  //       // );
  //       // console.log(result);
  //       setProductsByPage(data);
  //       setTotalItems(metaData.pagination.totalItems);
  //       setIsLoading(false);
  //       setShowMessage(false);
  //       // !data.length && setShowMessage(true);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   dishesFetch();
  // }, [idCategory, pageNumber, debouncedValue]);

  const { data } = useQueryData(
    `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`,
    ['dishes', idCategory, pageNumber, debouncedValue],
    ({ data, metaData }) => {
      // setTotalItems(metaData.pagination.totalItems),
      //   setIsLoading(false),
      //   setShowMessage(false),
      // !data.length && setShowMessage(true);
      // !data.length && showMessage = true;
      const { pagination: totalItems } = metaData;
      if (!data.length) setShowMessage(true);
      return {
        productsByPage: data,
        totalItems: 16,
        // isLoading: false,
        showMessage: false,
      };
    }
  );

  return {
    data,
    productsByPage,
    isLoading,
    showMessage,
  };
};
