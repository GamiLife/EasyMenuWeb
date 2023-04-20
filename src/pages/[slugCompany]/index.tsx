import * as React from 'react';
import { Container, Pagination } from '@gamiui/standard';
import classNames from 'classnames';

import { WithPagination } from '../../common/hocs/WithPagination';
import NextBreadcrumbs from '../../common/components/NextBreadcrumbs';
import { usePagination } from '../../common/hooks';
import { ProductList } from '../../common/components/ProductList';
import { WithLayout } from '../../common/hocs/WithLayout';
import { Categories } from '../../common/components/Categories';
import HomeProvider from '../../context/home/provider';
import { News } from '../../common/components/News';

const Home = () => {
  const { page, numberPages, handleChangePage } = usePagination(5);

  return (
    <HomeProvider>
      <Container padding="0 30px 20px" className={classNames('topics')}>
        <NextBreadcrumbs />
        <Categories />
      </Container>

      <News />

      <Container padding="20px 30px">
        <ProductList />

        <Container margin="0 0 1rem">
          {numberPages >= 1 && (
            <Pagination
              numberPages={numberPages}
              initialPage={0}
              onChangePage={(page) => handleChangePage(page)}
              page={page}
            />
          )}
        </Container>
      </Container>
    </HomeProvider>
  );
};

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(Home));
