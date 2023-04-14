import { useContext } from 'react';
import classNames from 'classnames';

import { WithLayout, WithPagination } from '../../../common/hocs';
import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import { LongRichText } from '../../../common/components/LongRichText';
import * as GlobalS from '../../../../styles/design-system/commons';

function About() {
  const { staticPages } = useContext(CompanyContext);
  const { data } = useFetchStaticPages(staticPages[2]?.id);

  console.log(data);

  return (
    <GlobalS.PageContainer height="full" className={classNames('about')}>
      <LongRichText />
      {/* <GlobalS.DynamicPage>{data?.data?.htmlContent}</GlobalS.DynamicPage> */}
    </GlobalS.PageContainer>
  );
}

export default WithLayout({
  title: 'Platters | Fridays',
  description:
    'TGI Fridays sirve sus platos favoritos de comida estadounidense directamente de la parrilla. Más de 931 bar restaurante y parrillas en más de 60 países. ¡Encuentre una ubicación cerca de usted!',
})(WithPagination(About));
