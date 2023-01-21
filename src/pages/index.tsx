import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Container, Pagination, Empty, Loader } from '@gamiui/standard';

import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { IProduct } from '../common/components/Product';
import { LayoutWrapper } from '../common/layouts';
import { get } from '../config/api';
import { lightTheme } from '../../styles/design-system/theme';
import { ProductList } from '../common/components/ProductList';
import { useDebounce, usePagination, useToggle } from '../common/hooks';
import { HomeContext, PaginationContext } from '../context';

export default function Home() {
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const { idCategory } = useContext(HomeContext);
  const { search, page } = useContext(PaginationContext);

  const { isVisible: isLoading, handleToggle: setIsLoading } = useToggle({
    defaultVisible: true,
  });
  const { isVisible: showMessage, handleToggle: setShowMessage } = useToggle({
    defaultVisible: false,
  });
  const debouncedValue = useDebounce(search, 500);

  const {
    pageNumber,
    SIZE_BY_PAGE,
    setTotalItems,
    numberPages,
    handleChangePage,
  } = usePagination(5);

  useEffect(() => {
    async function dishesFetch() {
      try {
        const result = await get(
          `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`
        );
        setProductsByPage(result.data);
        setTotalItems(result.metaData.pagination.totalItems);
        setIsLoading(false);
        setShowMessage(false);
        !result.data.length && setShowMessage(true);
      } catch (e) {
        console.log(e);
      }
    }
    dishesFetch();
  }, [
    SIZE_BY_PAGE,
    debouncedValue,
    idCategory,
    pageNumber,
    setIsLoading,
    setShowMessage,
    setTotalItems,
  ]);

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

        <Container>
          {isLoading && (
            <Loader.Wrapper
              minHeight="800px"
              isLoading={isLoading}
              loaderNode={
                <Loader
                  type="spinner"
                  background={`${lightTheme.primary.first}`}
                ></Loader>
              }
              className={classNames('flex', 'items-center')}
            >
              {''}
            </Loader.Wrapper>
          )}
        </Container>

        <Container>
          {showMessage && (
            <Empty text="No encontramos ningún producto para la búsqueda, intente con otro nombre." />
          )}
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
  <LayoutWrapper>{children}</LayoutWrapper>
);
