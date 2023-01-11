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
            ({ description, id, imageUrl, price, title }: IProduct) => (
              <Product
                id={id}
                description={description}
                imageUrl={imageUrl}
                price={price}
                title={title}
                key={id}
              />
            )
          )
        )
      }
    </S.ProductList>
  )
}