import { useContext } from 'react';
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import * as GlobalS from '../../../../styles/design-system/commons';
import { WithLayout, WithPagination } from '../../../common/hocs';
import { LongRichText } from '../../../common/components/LongRichText';

function About() {
  const { staticPages } = useContext(CompanyContext);
  const { data } = useFetchStaticPages(staticPages[2]?.id);

  return (
    <Container height="full" className={classNames('about')}>
      <LongRichText />
      <GlobalS.DynamicPage>{data?.data?.htmlContent}</GlobalS.DynamicPage>
    </Container>
  );
}

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(About));
