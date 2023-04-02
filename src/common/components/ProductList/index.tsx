import React, { Fragment } from 'react';
import { Container, Empty } from '@gamiui/standard';
import classNames from 'classnames';

import { Product } from '../Product';
import { useFetchDishesByCategory } from '../../hooks';
import { HomeContext } from '../../../context';
import { messages } from '../../constants';
import * as S from './styles';
import { ProductListSkeleton } from './ProductListSkeleton';

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
    <Fragment>
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
    </Fragment>
  );
};
