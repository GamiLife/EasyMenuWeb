import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { StoresList } from '../../common/components/StoresList';
import * as S from './styles';
import { messages } from '../../common/constants';

const { pageLocations } = messages;

export default function Locations() {
  return (
    <Container height="full" className={classNames('locations')}>
      <S.ContentWrapper>
        <S.TitleContainer>
          <S.LocationsTitle level="h2">{pageLocations.title}</S.LocationsTitle>
          <RichText text={pageLocations.description} />
        </S.TitleContainer>
        <S.StoresContainer>
          <StoresList />
        </S.StoresContainer>
      </S.ContentWrapper>
    </Container>
  );
}

Locations.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
