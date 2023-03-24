import { useRouter } from 'next/router';

import { useQueryData } from './useQueryData';

export const useFetchDishById = () => {
  const router = useRouter();
  const { pslug } = router.query;

  const { data, isLoading } = useQueryData(
    `dishes/slug/${pslug}`,
    ['dishById', pslug as string]
    // ({ data }) => {
    //   const { dishSauces, dishDishes, dishInfo } = data;
    //   const { description, imageUrl, price, title } = dishInfo;
    //   return {
    //     dishInfo: {
    //       description,
    //       imageUrl,
    //       price,
    //       title,
    //     },
    //     dishSauces,
    //     dishDishes,
    //   };
    // }
  );

  return {
    data,
    pslug,
    isLoading,
  };
};
