import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';

export default function Locations() {

  return (
    <Container height='full' className={classNames('topics')}>
        <h1>Locations !!!</h1>
    </Container>
  )
}

Locations.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)