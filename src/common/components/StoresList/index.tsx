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
                console.log(data);
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
                <S.StoreItem key={id}>
                  <Card.Content
                    title={<S.StoreItemTitle level='h3'>{name}</S.StoreItemTitle>}
                    description={
                      <Container>
                        <RichText text={address} />
                        <Container
                            className={classNames('flex')}
                            margin='0 0 1rem'
                        >
                            <S.PhoneIcon name='phone' />
                            <S.PhoneHeader level='h4'>Teléfono</S.PhoneHeader>
                        </Container>
                        <S.Phone text={phone}/>
                      </Container>
                    }
                  />
                </S.StoreItem>
            ))
        }
    </S.StoresList>
  )
}