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
  const { locations } = useLocations();

  return (
    <Container height="full" className={classNames('locations')}>
      <S.ContentWrapper>
        <S.TitleContainer>
          <S.LocationsTitle level="h2">{pageLocations.title}</S.LocationsTitle>
          <RichText text={pageLocations.description} />
        </S.TitleContainer>
        <S.StoresContainer>
          <StoresList locations={locations} />
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
