import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { ProductDetails } from '../../../common/components/ProductDetails';
import { LayoutWrapper } from '../../../common/layouts';
import { get } from '../../../config/api';

const Product = () => {
  const router = useRouter();
  const { pslug } = router.query;

  return (
    <Container height="full" className={classNames('products')}>
      <ProductDetails pslug={pslug as string} />
    </Container>
  );
};

Product.getLayout = (children: React.ReactNode) => {
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

  const { description, imageUrl, price, title } = dishInfo;

  function addProductJsonLd() {
    return `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": ${title},
      "image": [
        ${imageUrl}
       ],
      "description": ${description},
      "sku": "0446310786",
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "SOL",
        "price": ${price},
        "priceValidUntil": "2023-01-30",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `;
  }

  return (
    <LayoutWrapper
      title={`${pslug} | Fridays`}
      description=""
      jsonLd={addProductJsonLd()}
    >
      {children}
    </LayoutWrapper>
  );
};

export default Product;
