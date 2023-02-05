import { useContext } from 'react';
import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import * as GlobalS from '../../../../styles/design-system/commons';
// import { LongRichText } from '../../../common/components/LongRichText';

export default function About() {
  const { staticPages } = useContext(CompanyContext);
  const { htmlContent } = useFetchStaticPages(staticPages[2]?.id);

  return (
    <Container height="full" className={classNames('about')}>
      <GlobalS.DynamicPage>
        {htmlContent}
        {/* <LongRichText /> */}
      </GlobalS.DynamicPage>
    </Container>
  );
}

About.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper
    title="Nosotros | Fridays"
    description="Somos una empresa peruana orgullosa de brindarles el mejor sabor desde 1985"
  >
    {children}
  </LayoutWrapper>
);
