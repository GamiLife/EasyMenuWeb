import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { LongRichText } from '../../common/components/LongRichText';
import * as GlobalS from '../../../styles/design-system/commons';

export default function About() {
  return (
    <Container height="full" className={classNames('about')}>
      <GlobalS.DynamicPage>
        <LongRichText />
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
