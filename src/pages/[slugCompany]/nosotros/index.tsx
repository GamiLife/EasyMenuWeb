import { useContext } from 'react';
import { Container } from '@gamiui/standard';
import classNames from 'classnames';

import { useFetchStaticPages } from '../../../common/hooks/useFetchStaticPages';
import { CompanyContext } from '../../../context';
import { LayoutWrapper } from '../../../common/layouts';
import * as GlobalS from '../../../../styles/design-system/commons';
import Custom404 from '../../404';
// import { LongRichText } from '../../../common/components/LongRichText';

export default function About() {
  const { staticPages, isEnabledCompany } = useContext(CompanyContext);
  const { data } = useFetchStaticPages(staticPages[2]?.id);

  if (isEnabledCompany === false) {
    return <Custom404 />;
  }

  return (
    <Container height="full" className={classNames('about')}>
      <GlobalS.DynamicPage>
        {data?.htmlContent}
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
