import React from 'react';
import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { SauceInCombo } from '../SauceInCombo';
import * as S from './styles';

interface ISauceContainer {
  sauces: GetDishResponseDTO.SauceInCombo[];
  maxItems: number;
}

export const SauceContainer = ({ sauces, maxItems }: ISauceContainer) => {
  return (
    <S.SauceContainer>
      {sauces?.map(
        ({ id, sauce, maxItemsByRow }: GetDishResponseDTO.SauceInCombo) => {
          const { title, description, priceByUnit, imageUrl } = sauce;

          return (
            <Container key={id} width="full">
              <SauceInCombo
                // id={id}
                title={title}
                description={description}
                priceByUnit={priceByUnit}
                imageUrl={imageUrl}
                maxItemsByRow={maxItemsByRow}
                // maxItems={maxItems}
              />
            </Container>
          );
        }
      )}
    </S.SauceContainer>
  );
};
