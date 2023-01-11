import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';
import { LongRichText } from '../../common/components/LongRichText';

export default function TermsConditions() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <LongRichText />
        {/* <S.RichTextTitle text='Términos y condiciones del servicio' />
        <Container>
          <RichText text='A continuación, podrán leer los términos y condiciones mediante los que usted podrá usar nuestro servicio de pedidos. Al acceder y utilizar nuestros servicios, usted acepta que ha leído, entiende y está de acuerdo con las condiciones descritas en esta sección "Términos y Condiciones”.' />
        </Container> */}
      </S.ContentWrapper>
    </Container>
  )
}

TermsConditions.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)
