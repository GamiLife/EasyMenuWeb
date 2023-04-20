/* eslint-disable react-hooks/rules-of-hooks */
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { WithLayout, WithPagination } from '../../../../common/hocs';
import { ProductDetails } from '../../../../common/components/ProductDetails';
import { LayoutWrapper } from '../../../../common/layouts';

const Product = () => {
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

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(Product));
