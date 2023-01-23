import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { ProductDetails } from '../../../common/components/ProductDetails';
import { LayoutWrapper } from '../../../common/layouts';

const Product = () => {
  return (
    <Container height="full" className={classNames('products')}>
      <ProductDetails />
    </Container>
  );
};

Product.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Product;
