import { Card, Container, RichText, Title } from '@gamiui/standard';
import classNames from 'classnames';

import locationsBlock from '../../blocks/locations-block.json';
import { Block } from '../../layouts';
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
      <Block.Tooltip blockId={locationsBlock.LOCATION_CARD} />
      <Card.Content
        title={
          <S.StoreItemTitle
            component={Title}
            blockId={locationsBlock.LOCATION_CARD}
            allowBorder={false}
            level="h3"
          >
            {name}
          </S.StoreItemTitle>
        }
        description={
          <S.PhoneAddressContainer
            component={Container}
            blockId={locationsBlock.LOCATION_CARD}
            allowBorder={false}
          >
            <RichText text={address} margin="0 0 10px" />
            <S.PhoneContainer className={classNames('flex')}>
              <S.PhoneIcon name="phone" />
              <S.PhoneHeader
                component={Title}
                blockId={locationsBlock.LOCATION_CARD}
                allowBorder={false}
                level="h4"
              >
                Teléfono
              </S.PhoneHeader>
            </S.PhoneContainer>
            <S.Phone text={phone} />
          </S.PhoneAddressContainer>
        }
      />
    </S.StoreItem>
  );
};
