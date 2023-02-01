import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { ProductDetails } from '../../../common/components/ProductDetails';
import { LayoutWrapper } from '../../../common/layouts';
import { useFetchDishesId } from '../../../common/hooks';

const Product = () => {
  return (
    <Container height="full" className={classNames('products')}>
      <ProductDetails />
    </Container>
  );
};

Product.getLayout = (children: React.ReactNode) => {
  const { dishInfo, pslug } = useFetchDishesId();

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
