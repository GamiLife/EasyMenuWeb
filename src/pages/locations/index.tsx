import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { StoresList } from '../../common/components/StoresList';
import * as S from './styles';

export default function Locations() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <S.TitleContainer>
          <S.LocationsTitle level='h2'>Nuestros locales</S.LocationsTitle>
          <RichText text='Cuéntanos donde estás para que podamos presentarte el menú y las ofertas disponibles en la tienda más cercana. Incluye la dirección para entrega a delivery.' />
        </S.TitleContainer>
        <S.StoresContainer>
          <StoresList />
        </S.StoresContainer>
      </S.ContentWrapper>
    </Container>
  )
}

Locations.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)