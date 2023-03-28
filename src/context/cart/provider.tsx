import * as React from 'react';
import { useRouter } from 'next/router';

import { CartContext, ICartProvider } from './context';
import { get } from '../../config/api';

const CartProvider = ({ children }: ICartProvider) => {
  const router = useRouter();
  const { pslug } = router.query;

  React.useEffect(() => {
    if (!pslug) return;
    async function dishesId() {
      try {
        const {
          data: { dishInfo },
        } = await get(`dishes/slug/${pslug}`);
        const { description, imageUrl, price, title } = dishInfo;
      } catch (e) {
        console.log(e);
      }
    }
    dishesId();
  }, [pslug]);

  return (
    <CartContext.Provider
      value={{
        title,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
