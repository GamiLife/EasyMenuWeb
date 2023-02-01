import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { get } from '../../config/api';

export const useFetchDishesId = () => {
  const [dishInfo, setDishInfo] = useState({
    description: '',
    imageUrl: '',
    price: 0,
    title: '',
  });
  const [dishSauces, setDishSauces] = useState([]);
  const [dishDishes, setDishDishes] = useState([]);

  const router = useRouter();
  const { pslug } = router.query;

  useEffect(() => {
    if (!pslug) return;

    async function dishesIdfetch() {
      try {
        const { data } = await get(`dishes/slug/${pslug}`);
        const { dishSauces, dishDishes, dishInfo } = data;
        const { description, imageUrl, price, title } = dishInfo;
        setDishInfo({
          description,
          imageUrl,
          price,
          title,
        });
        setDishSauces(dishSauces);
        setDishDishes(dishDishes);
      } catch (e) {
        console.log(e);
      }
    }
    dishesIdfetch();
  }, [pslug]);
  return {
    dishInfo,
    dishSauces,
    dishDishes,
    pslug,
  };
};
