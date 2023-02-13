import { useContext } from 'react';
import classNames from 'classnames';
import { Container, Pagination, RichText } from '@gamiui/standard';

import { useFetchLocations } from '../../../common/hooks/useFetchLocations';
import PaginationProvider from '../../../context/PaginationContext';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import { StoresList } from '../../../common/components/StoresList';
import { messages } from '../../../common/constants';
import { Spinner } from '../../../common/components/Spinner';
import Custom404 from '../../404';
import * as S from './styles';

import { useTranslation } from 'react-i18next';

const { pageLocations } = messages;

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
        {/* <S.LocationsTitle level="h2">{pageLocations.title}</S.LocationsTitle> */}
        <S.LocationsTitle level="h2">{t(pageLocations.title)}</S.LocationsTitle>
        <RichText text={pageLocations.description} />
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
