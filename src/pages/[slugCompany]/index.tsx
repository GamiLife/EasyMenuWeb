import * as React from 'react';
import { Container, Pagination, Empty } from '@gamiui/standard';
import classNames from 'classnames';

import { Block, LayoutWrapper } from '../../common/layouts';
import PaginationProvider from '../../context/pagination/provider';
import { CompanyContext } from '../../context/company';
import { useFetchDishes } from '../../common/hooks/useFetchDishes';
import NextBreadcrumbs from '../../common/components/NextBreadcrumbs';
import { usePagination } from '../../common/hooks';
import { ProductList } from '../../common/components/ProductList';
import { HomeContext } from '../../context/home';
import { Categories } from '../../common/components/Categories';
import { messages } from '../../common/constants';
import Custom404 from '../404';
import { Spinner } from '../../common/components/Spinner';
import homeBlock from '../../common/blocks/home-block.json';
import { News } from '../../common/components/News';

const { pageHome } = messages;

export default function Home() {
  const { idCategory } = React.useContext(HomeContext);
  const { isEnabledCompany } = React.useContext(CompanyContext);

  const { productsByPage, isLoading, showMessage } = useFetchDishes({
    idCategory,
  });
  const { page, numberPages, handleChangePage } = usePagination(5);

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

  return (
    <React.Fragment>
      <Block
        component={Container}
        padding="0 30px 20px"
        className={classNames('topics')}
        blockId={homeBlock.CATEGORIES_CONTAINER}
      >
        <NextBreadcrumbs />
        <Categories />
      </Block>

      <News />

      <Container padding="20px 30px">
        <ProductList isLoading={isLoading} productsByPage={productsByPage} />

        <Spinner isLoading={isLoading} />

        <Container>
          {showMessage && <Empty text={pageHome.emptyComponentText} />}
        </Container>

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
