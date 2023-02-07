import { useContext } from 'react';
import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { useFetchDishesId } from '../../../../common/hooks';
import { ProductDetails } from '../../../../common/components/ProductDetails';
import { CompanyContext } from '../../../../context';
import { LayoutWrapper } from '../../../../common/layouts';
import Custom404 from '../../../404';

const Product = () => {
  const { isEnabledCompany } = useContext(CompanyContext);

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

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
        "url": "http://localhost:3000/",
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
