import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Card, Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { get } from '../../config/api';
import * as S from './styles';

export default function Locations() {
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
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <S.TitleContainer>
          <S.LocationsTitle level='h2'>Nuestros locales</S.LocationsTitle>
          <RichText text='Cuéntanos donde estás para que podamos presentarte el menú y las ofertas disponibles en la tienda más cercana. Incluye la dirección para entrega a delivery.' />
        </S.TitleContainer>
        <S.StoresContainer>
          <S.StoresList>
            {
              locations.map( ({address, id, name, phone}) => (
                <S.StoreItem>
                  <Card.Content
                    title={<S.StoreItemTitle level='h3'>{name}</S.StoreItemTitle>}
                    description={
                      <Container>
                        <RichText text={address} />
                      </Container>
                    }
                  />
                </S.StoreItem>
              ))
            }
          </S.StoresList>
        </S.StoresContainer>
      </S.ContentWrapper>
    </Container>
  )
}

Locations.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)