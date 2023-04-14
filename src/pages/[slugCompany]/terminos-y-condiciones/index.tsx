import { useContext } from 'react';
import classNames from 'classnames';

import { WithLayout, WithPagination } from '../../../common/hocs';
import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import * as GlobalS from '../../../../styles/design-system/commons';

function TermsConditions() {
  const { staticPages } = useContext(CompanyContext);

  const { data } = useFetchStaticPages(staticPages[0]?.id);

  return (
    <GlobalS.PageContainer
      height="full"
      className={classNames('terms_condition')}
    >
      <GlobalS.DynamicPage>{data?.data?.htmlContent}</GlobalS.DynamicPage>
    </GlobalS.PageContainer>
  );
}

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(TermsConditions));
