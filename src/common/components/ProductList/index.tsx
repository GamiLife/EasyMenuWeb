import classNames from 'classnames';

import { IProduct, Product } from '../Product';
import * as S from './styles';

interface IProductList{
    isLoading: boolean;
    productsByPage: IProduct[];
}

export const ProductList = ({isLoading, productsByPage}: IProductList) => {
  return (
    <S.ProductList className={classNames('topics__header')}>
      {
        !isLoading && (
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
          )
        )
      }
    </S.ProductList>
  )
}