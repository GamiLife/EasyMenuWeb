import classNames from 'classnames';

import { IProduct, Product } from '../Product';
import * as S from './styles';

interface IProductList {
  productsByPage: IProduct[];
  isLoading: boolean;
}

export const ProductList = ({ productsByPage, isLoading }: IProductList) => {
  return (
    <S.ProductList className={classNames('product-list')}>
      {!isLoading &&
        productsByPage?.map(
          ({ description, id, imageUrl, price, title, slug }: IProduct) => (
            <Product
              key={id}
              id={id}
              description={description}
              imageUrl={imageUrl}
              price={price}
              title={title}
              slug={slug}
            />
          )
        )}
    </S.ProductList>
  );
};
