import * as React from 'react';
import { useContext } from 'react';
import classNames from 'classnames';
import { Container, Pagination, Empty } from '@gamiui/standard';

import { HomeContext } from '../../context/HomeContext';
import PaginationProvider from '../../context/PaginationContext';
import { useFetchDishes } from '../../common/hooks/useFetchDishes';
import { CompanyContext } from '../../context';
import { LayoutWrapper } from '../../common/layouts';
import { ProductList } from '../../common/components/ProductList';
import { Categories } from '../../common/components/Categories';
import { messages } from '../../common/constants';
import Custom404 from '../404';
import { Spinner } from '../../common/components/Spinner';
import { News } from '../../common/components/News';

const { pageHome } = messages;

export default function Home() {
  const { idCategory } = useContext(HomeContext);
  const { isEnabledCompany } = useContext(CompanyContext);

  const {
    page,
    numberPages,
    productsByPage,
    isLoading,
    showMessage,
    handleChangePage,
  } = useFetchDishes({ idCategory });

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

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
  <PaginationProvider>
    <LayoutWrapper
      title="Platters | Fridays"
      description="TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!"
    >
      {children}
    </LayoutWrapper>
  </PaginationProvider>
);
