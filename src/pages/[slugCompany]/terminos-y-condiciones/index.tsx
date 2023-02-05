import { useContext } from 'react';
import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import * as GlobalS from '../../../../styles/design-system/commons';
// import { LongRichText } from '../../../common/components/LongRichText';

export default function TermsConditions() {
  const { staticPages } = useContext(CompanyContext);
  const { htmlContent } = useFetchStaticPages(staticPages[0]?.id);

  return (
    <Container height="full" className={classNames('terms_condition')}>
      <GlobalS.DynamicPage>
        {htmlContent}
        {/* <LongRichText /> */}
      </GlobalS.DynamicPage>
    </Container>
  );
}

TermsConditions.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper
    title="Términos y condiciones | Fridays"
    description="¿Dudas sobre pedidos, promociones y el delivery de nuestros productos? Conoce nuestros términos y condiciones, aquí "
  >
    {children}
  </LayoutWrapper>
);
