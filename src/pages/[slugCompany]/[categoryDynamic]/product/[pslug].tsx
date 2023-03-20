/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchDishesId } from '../../../../common/hooks';
import { CompanyContext } from '../../../../context/company';
import { ProductDetails } from '../../../../common/components/ProductDetails';
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
  // const { data, pslug } = useFetchDishesId();

  // const { description, imageUrl, price, title } = data.dishInfo;

  // function addProductJsonLd() {
  //   return `{
  //     "@context": "https://schema.org/",
  //     "@type": "Product",
  //     "name": ${title},
  //     "image": [
  //       ${imageUrl}
  //      ],
  //     "description": ${description},
  //     "sku": "0446310786",
  //     "offers": {
  //       "@type": "Offer",
  //       "url": ${process.env.CMS_URL}/,
  //       "priceCurrency": "SOL",
  //       "price": ${price},
  //       "priceValidUntil": "2023-01-30",
  //       "itemCondition": "https://schema.org/UsedCondition",
  //       "availability": "https://schema.org/InStock"
  //     }
  //   }
  // `;
  // }

  return (
    <LayoutWrapper
      title={''}
      description=""
      jsonLd={''}
      // title={`${pslug} | Fridays`}
      // jsonLd={addProductJsonLd()}
    >
      {children}
    </LayoutWrapper>
  );
};

export default Product;
