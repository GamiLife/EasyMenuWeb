import React from 'react';
import { Container, Empty } from '@gamiui/standard';
import classNames from 'classnames';

import { IProduct, Product } from '../Product';
import { useFetchHomeDishes } from '../../hooks';
import { HomeContext } from '../../../context';
import { messages } from '../../constants';
import { Spinner } from '../Spinner';
import * as S from './styles';

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
      <Container>
        {showMessage && <Empty text={pageHome.productsNotFoundText} />}
      </Container>
    </S.ProductList>
  );
};
