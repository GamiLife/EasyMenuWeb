import * as React from 'react';
import classNames from 'classnames';
import { Container, Pagination, Empty } from '@gamiui/standard';

import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { LayoutWrapper } from '../common/layouts';
import { ProductList } from '../common/components/ProductList';
import { messages } from '../common/constants';
import { useFetchDishes } from '../common/hooks/useFetchDishes';
import { Spinner } from '../common/components/Spinner';
import HomeProvider from '../context/HomeContext';
import PaginationProvider from '../context/PaginationContext';

const { pageHome } = messages;

export default function Home() {
  const {
    page,
    numberPages,
    productsByPage,
    isLoading,
    showMessage,
    handleChangePage,
  } = useFetchDishes();

  return (
    <React.Fragment>
      <Container padding="20px 30px" className={classNames('topics')}>
        <Container>
          <Categories />
        </Container>
      </Container>

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
  <HomeProvider>
    <PaginationProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </PaginationProvider>
  </HomeProvider>
);
