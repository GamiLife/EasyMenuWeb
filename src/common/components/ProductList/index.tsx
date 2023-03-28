import React from 'react';
import { Container, Empty } from '@gamiui/standard';
import classNames from 'classnames';

import { Product } from '../Product';
import { useFetchHomeDishes } from '../../hooks';
import { HomeContext } from '../../../context';
import { messages } from '../../constants';
import { Spinner } from '../Spinner';
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

  const { data, isLoading, showMessage } = useFetchHomeDishes({
    idCategory,
  });

  if (isLoading) return <Spinner isLoading={isLoading} minHeight="800px" />;

  return (
    <S.ProductList className={classNames('product-list')}>
      {data?.map(
        ({ id, title, description, priceByUnit, imageUrl, slug }: IProduct) => (
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
  );
};
