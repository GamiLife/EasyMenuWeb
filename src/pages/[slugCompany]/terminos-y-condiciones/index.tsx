import { useContext } from 'react';
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import * as GlobalS from '../../../../styles/design-system/commons';
import { WithLayout, WithPagination } from '../../../common/hocs';

function TermsConditions() {
  const { staticPages } = useContext(CompanyContext);
  const { data } = useFetchStaticPages(staticPages[0]?.id);

  return (
    <Container height="full" className={classNames('terms_condition')}>
      <GlobalS.DynamicPage>{data?.htmlContent}</GlobalS.DynamicPage>
    </Container>
  );
}

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(TermsConditions));
