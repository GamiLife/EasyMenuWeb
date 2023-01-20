import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { LongRichText } from '../../common/components/LongRichText';
import * as GlobalS from '../../../styles/design-system/commons';

export default function TermsConditions() {
  return (
    <Container height="full" className={classNames('terms_condition')}>
      <GlobalS.DynamicPage>
        <LongRichText />
      </GlobalS.DynamicPage>
    </Container>
  );
}

TermsConditions.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
