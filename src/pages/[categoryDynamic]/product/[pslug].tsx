import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../../common/layouts';
import { ProductDetails } from '../../../common/components/ProductDetails';

const Product = () => {

    return (
        <Container height='full' className={classNames('topics')}>
            <ProductDetails />
        </Container>
    )
}

Product.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
);

export default Product;