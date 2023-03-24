import * as React from 'react';
import { Container, Pagination } from '@gamiui/standard';
import classNames from 'classnames';

import PaginationProvider from '../../context/pagination/provider';
import { CompanyContext } from '../../context/company';
import NextBreadcrumbs from '../../common/components/NextBreadcrumbs';
import { LayoutWrapper } from '../../common/layouts';
import { usePagination } from '../../common/hooks';
import { ProductList } from '../../common/components/ProductList';
import { Categories } from '../../common/components/Categories';
import Custom404 from '../404';
import { News } from '../../common/components/News';

export default function Home() {
  const { isEnabledCompany } = React.useContext(CompanyContext);

  const { page, numberPages, handleChangePage } = usePagination(5);
  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <PaginationProvider>
    <LayoutWrapper
      title="Platters | Fridays"
      description="TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!"
    >
      {children}
    </LayoutWrapper>
  </PaginationProvider>
);
