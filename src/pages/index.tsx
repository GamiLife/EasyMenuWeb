import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';
import { Container, Modal, Pagination, Empty, Loader } from '@gamiui/standard';

import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { IProduct } from '../common/components/Product';
import { LayoutWrapper } from '../common/layouts';
import { ThemeContext } from '../context/ThemeContext';
import { get } from '../config/api';
import { lightTheme } from '../../styles/design-system/theme';
import { ProductList } from '../common/components/ProductList';
import useDebounce from '../common/components/hooks/useDebounce';

export default function Home() {

  const [visible, setVisible] = useState(false);
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const { idCategory, value, page, setPage } = useContext(ThemeContext);
  const debouncedValue = useDebounce(value, 500);
 
  const SIZE_BY_PAGE = 5;
  let pageNumber = 1 + page;
  const numberPages = Math.ceil(totalItems / SIZE_BY_PAGE);

  useEffect(() => {
    async function dishesFetch(){
      try{
        const result = await get(`dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`);
        setProductsByPage(result.data);
        setTotalItems(result.metaData.pagination.totalItems);
        setIsLoading(false);
        setShowMessage(false);
        !result.data.length && setShowMessage(true);
      }catch(e){
        console.log(e);
      }
    }
    dishesFetch();
  }, [idCategory, pageNumber, debouncedValue])

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleChangePage = (page: number) => {
    // console.log('test', page);
    setPage(page);
  };

  return (
    <React.Fragment>
      <Modal visible={visible} onClose={onClose} title='This is my title'>
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>

      <Container padding='1rem' className={classNames('topics')}>
        <Container>
          <Categories />
        </Container>

        <News />

        <ProductList
          isLoading={isLoading}
          productsByPage={productsByPage}
        />

        <Container>
          {
            isLoading && (
              <Loader.Wrapper 
                minHeight='800px'
                isLoading={isLoading}
                loaderNode={<Loader type='spinner' background={`${lightTheme.primary.first}`}></Loader>}
                className={classNames('flex', 'items-center')}
              >
              </Loader.Wrapper>
            )
          }
        </Container>

        <Container>
          {
            showMessage && (
              <Empty text='No encontramos ningún producto para la búsqueda, intente con otro nombre.' />
            )
          }
        </Container>

        <Container margin='0 0 2rem'>
          {numberPages >= 1 && (
            <Pagination
              numberPages={numberPages}
              initialPage={0}
              onChangePage={page => handleChangePage(page)}
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