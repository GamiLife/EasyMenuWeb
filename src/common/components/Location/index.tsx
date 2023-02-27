import { Card, RichText } from '@gamiui/standard';
import classNames from 'classnames';

import locationsBlock from '../../blocks/locations-block.json';
import * as S from './styles';

export interface ILocation {
  address: string;
  id?: number;
  name: string;
  phone: string;
}

export const Location = ({ address, name, phone }: ILocation) => {
  return (
    <S.StoreItem
      component={Card}
      blockId={locationsBlock.LOCATION_CARD}
      width="full"
      shadow="xs"
      rounded="md"
    >
      <Card.Content
        title={<S.StoreItemTitle level="h3">{name}</S.StoreItemTitle>}
        description={
          <S.PhoneAddressContainer>
            <RichText text={address} margin="0 0 10px" />
            <S.PhoneContainer className={classNames('flex')}>
              <S.PhoneIcon name="phone" />
              <S.PhoneHeader level="h4">Teléfono</S.PhoneHeader>
            </S.PhoneContainer>
            <S.Phone text={phone} />
          </S.PhoneAddressContainer>
        }
      />
    </S.StoreItem>
  );
};
