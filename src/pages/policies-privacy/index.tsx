import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';

export default function PoliciesPrivacy() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <S.RichTextTitle text='Política de protección de datos personales clientes' />
        {/* <Spacer customSize='16px' direction='bottom' /> */}
        <Container>
          <RichText text='A continuación, podrán leer los términos y condiciones mediante los que usted podrá usar nuestro servicio de pedidos. Al acceder y utilizar nuestros servicios, usted acepta que ha leído, entiende y está de acuerdo con las condiciones descritas en esta sección "Términos y Condiciones”.' />
        </Container>
      </S.ContentWrapper>
    </Container>
  )
}

PoliciesPrivacy.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)