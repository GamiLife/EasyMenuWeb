import { useContext } from 'react';
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import * as GlobalS from '../../../../styles/design-system/commons';
import Custom404 from '../../404';
// import { LongRichText } from '../../../common/components/LongRichText';

export default function PoliciesPrivacy() {
  const { staticPages, isEnabledCompany } = useContext(CompanyContext);

  const { htmlContent } = useFetchStaticPages(staticPages[1]?.id);

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

  return (
    <Container height="full" className={classNames('policies_privacy')}>
      <GlobalS.DynamicPage>
        {htmlContent}
        {/* <LongRichText /> */}
      </GlobalS.DynamicPage>
    </Container>
  );
}

PoliciesPrivacy.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper
    title="Políticas de privacidad | Fridays"
    description="Las políticas de privacidad de datos se aplica al procedimiento de datos personales recopilados por GRUPO ROKYS SOCIEDAD ANONIMA CERRADA "
  >
    {children}
  </LayoutWrapper>
);
