import { useContext } from 'react';
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import * as GlobalS from '../../../../styles/design-system/commons';
import Custom404 from '../../404';
// import { LongRichText } from '../../../common/components/LongRichText';

export default function TermsConditions() {
  const { staticPages, isEnabledCompany } = useContext(CompanyContext);

  const { htmlContent } = useFetchStaticPages(staticPages[0]?.id);

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

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
