import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Card, Container, RichText } from '@gamiui/standard';

import { get } from '../../../config/api';
import * as S from './styles';

export const StoresList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function locationsFetch(){
      try{
        const { data } = await get('locations/companies/1?page=1&sizeByPage=6');
        setLocations(data);
      }catch(e){
        console.log(e);
      }
    }
    locationsFetch();
  }, [])

  return (
    <S.StoresList>
      {
        locations.map( ({address, id, name, phone}) => (
          <S.StoreItem 
            key={id}
            width='full'
            shadow='xs'
            rounded='md'
          >
            <Card.Content
              title={<S.StoreItemTitle level='h3'>{name}</S.StoreItemTitle>}
              description={
                <S.PhoneAddressContainer>
                  <RichText text={address} margin='0 0 10px' />
                  <S.PhoneContainer
                    className={classNames('flex')}
                  >
                    <S.PhoneIcon name='phone' />
                    <S.PhoneHeader level='h4'>Teléfono</S.PhoneHeader>
                  </S.PhoneContainer>
                  <S.Phone text={phone} />
                </S.PhoneAddressContainer>
              }
            />
          </S.StoreItem>
        ))
      }
    </S.StoresList>
  )
}