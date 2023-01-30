import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { ProductDetails } from '../../../common/components/ProductDetails';
import { LayoutWrapper } from '../../../common/layouts';

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
  const router = useRouter();
  const { pslug } = router.query;

  function addProductJsonLd() {
    return {
      __html: `{
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
  `,
    };
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
