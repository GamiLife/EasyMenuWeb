import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { LongRichText } from '../../common/components/LongRichText';
import * as GlobalS from '../../../styles/design-system/commons';

export default function PoliciesPrivacy() {
  return (
    <Container height="full" className={classNames('policies_privacy')}>
      <GlobalS.DynamicPage>
        <LongRichText />
      </GlobalS.DynamicPage>
    </Container>
  );
}

PoliciesPrivacy.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
