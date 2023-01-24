import React from 'react';
import classNames from 'classnames';
import { Card, RichText } from '@gamiui/standard';

import * as S from './styles';

export const StoresList = ({ locations }) => {
  return (
    <S.StoresList>
      {locations.map(({ address, id, name, phone }) => (
        <S.StoreItem key={id} width="full" shadow="xs" rounded="md">
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
      ))}
    </S.StoresList>
  );
};
