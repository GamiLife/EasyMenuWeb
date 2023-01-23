import classNames from 'classnames';
import { Container, Pagination, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { StoresList } from '../../common/components/StoresList';
import { messages } from '../../common/constants';
import { useLocations } from '../../common/hooks/useLocations';
import PaginationProvider from '../../context/PaginationContext';
import * as S from './styles';

const { pageLocations } = messages;

export default function Locations() {
  // const { page, numberPages, handleChangePage } = usePagination(3);
  // console.log(numberPages);
  // console.log(handleChangePage);
  // console.log(page);
  const { page, numberPages, handleChangePage } = useLocations();
  // console.log(page, numberPages, handleChangePage);

  return (
    <Container height="full" className={classNames('locations')}>
      <S.ContentWrapper>
        <S.TitleContainer>
          <S.LocationsTitle level="h2">{pageLocations.title}</S.LocationsTitle>
          <RichText text={pageLocations.description} />
        </S.TitleContainer>
        <S.StoresContainer>
          <StoresList />
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
        </S.StoresContainer>
      </S.ContentWrapper>
    </Container>
  );
}

Locations.getLayout = (children: React.ReactNode) => (
  <PaginationProvider>
    <LayoutWrapper>{children}</LayoutWrapper>
  </PaginationProvider>
);
