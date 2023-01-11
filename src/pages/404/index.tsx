import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';

export default function Custom404() {
  return (
    <Container padding='1rem' className={classNames('topics')}>
      <S.ErrorPage>
        <S.ContentError>
          <S.ErrorTitle level='h2'>Lo sentimos</S.ErrorTitle>
          <S.ErrorImagen level='h3'>404</S.ErrorImagen>
          <RichText text='No se pudo encontrar esta página.' fontWeight='bold' />
        </S.ContentError>
        <S.BackLink href='/'>Volver al inicio</S.BackLink>
      </S.ErrorPage>
    </Container>
  )
}

Custom404.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)