import React from 'react';
import { Container, Empty } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchDishesByCategory } from '../../hooks';
import { ProductListSkeleton } from './ProductListSkeleton';
import { HomeContext } from '../../../context';
import { messages } from '../../constants';
import { Product } from '../Product';
import * as S from './styles';

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
  slug: string;
}

const { pageHome } = messages;

export const ProductList = () => {
  const { idCategory } = React.useContext(HomeContext);

  const { data, isLoading, showMessage } = useFetchDishesByCategory({
    idCategory,
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <S.ProductList className={classNames('product-list')}>
          {data?.map(
            ({
              id,
              title,
              description,
              priceByUnit,
              imageUrl,
              slug,
            }: IProduct) => (
              <Product
                key={id}
                title={title}
                description={description}
                priceByUnit={priceByUnit}
                imageUrl={imageUrl}
                slug={slug}
              />
            )
          )}
          <Container>
            {showMessage && <Empty text={pageHome.productsNotFoundText} />}
          </Container>
        </S.ProductList>
      )}
    </React.Fragment>
  );
};
