import { Container, Pagination, RichText } from '@gamiui/standard';
import classNames from 'classnames';

import { useCustomTranslation, usePagination } from '../../../common/hooks';
import { StoresList } from '../../../common/components/StoresList';
import * as S from './styles';
import { WithLayout, WithPagination } from '../../../common/hocs';

function Locations() {
  const { page, numberPages, handleChangePage } = usePagination(4);
  const { t } = useCustomTranslation();

  return (
    <S.ContentWrapper height="full" className={classNames('locations', 'flex')}>
      <S.TitleContainer>
        <S.LocationsTitle level="h2">
          {t('pageLocations.title')}
        </S.LocationsTitle>
        <RichText text={t('pageLocations.description')} />
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
  );
}

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(Locations));
