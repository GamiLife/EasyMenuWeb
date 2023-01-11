import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';

export default function About() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <Container>
          <S.AboutTitle level='h1'>Nosotros</S.AboutTitle>
          <RichText text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus cupiditate velit rem libero, incidunt illum nemo neque aut enim? Iste perspiciatis rerum excepturi omnis perferendis, tempore recusandae voluptate architecto sint.' />
        </Container>
      </S.ContentWrapper>
    </Container>
  )
}

About.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)