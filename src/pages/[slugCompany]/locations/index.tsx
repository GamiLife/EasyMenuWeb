import { useContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import classNames from 'classnames';
import { Container, Pagination, RichText } from '@gamiui/standard';

import { useFetchLocations } from '../../../common/hooks/useFetchLocations';
import PaginationProvider from '../../../context/PaginationContext';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import { StoresList } from '../../../common/components/StoresList';
import { Spinner } from '../../../common/components/Spinner';
import Custom404 from '../../404';
import * as S from './styles';

export default function Locations() {
  const { isEnabledCompany } = useContext(CompanyContext);

  const { page, locations, numberPages, isLoading, handleChangePage } =
    useFetchLocations();

  const { t } = useTranslation();

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

  return (
    <S.ContentWrapper height="full" className={classNames('locations', 'flex')}>
      <S.TitleContainer>
        <S.LocationsTitle level="h2">
          {t('pageLocations.title')}
        </S.LocationsTitle>
        <Trans i18nKey="pageLocations.description">
          <RichText text="Cuéntanos donde estás para que podamos presentarte el menú y las ofertas disponibles en la <br> tienda más cercana. Incluye la dirección para entrega a delivery." />
          {/* <RichText text={t('pageLocations.description')} /> */}
        </Trans>
      </S.TitleContainer>
      <S.StoresContainer>
        <Spinner isLoading={isLoading} />

        <StoresList locations={locations} isLoading={isLoading} />

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

Locations.getLayout = (children: React.ReactNode) => (
  <PaginationProvider>
    <LayoutWrapper
      title="Nuestros Locales | Fridays"
      description="Hay uno de nuestros restaurantes muy cerca de donde estás. Ubícalo aquí ¡Te esperamos!"
    >
      {children}
    </LayoutWrapper>
  </PaginationProvider>
);
