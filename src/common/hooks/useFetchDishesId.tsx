import { useRouter } from 'next/router';

import { useQueryData } from './useQueryData';

export const useFetchDishesId = () => {
  const router = useRouter();
  const { pslug } = router.query;

  const { data, isLoading } = useQueryData(
    `dishes/slug/${pslug}`,
    ['dishesId', pslug as string],
    ({ data }) => {
      const { dishSauces, dishDishes, dishInfo } = data;
      const { description, imageUrl, price, title } = dishInfo;
      return {
        dishInfo: {
          description,
          imageUrl,
          price,
          title,
        },
        dishSauces,
        dishDishes,
      };
    }
  );

  return {
    data,
    pslug,
    isLoading,
  };
};
