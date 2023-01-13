import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { LongRichText } from '../../common/components/LongRichText';
import * as S from './styles';

export default function PoliciesPrivacy() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <LongRichText />
      </S.ContentWrapper>
    </Container>
  )
}

PoliciesPrivacy.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)