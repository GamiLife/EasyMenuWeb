import { Container } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import { SauceInCombo } from '../SauceInCombo';
import * as S from './styles';

interface ISauceContainer {
  sauces: GetDishResponseDTO.SauceInCombo[];
}

export const SauceContainer = ({ sauces }: ISauceContainer) => {
  return (
    <S.SauceContainer>
      {sauces?.map(
        ({ id, sauce, maxItemsByRow }: GetDishResponseDTO.SauceInCombo) => {
          const { title, description, priceByUnit, imageUrl } = sauce;
          return (
            <Container key={id} width="full">
              <SauceInCombo
                id={id}
                title={title}
                description={description}
                priceByUnit={priceByUnit}
                imageUrl={imageUrl}
              />
            </Container>
          );
        }
      )}
    </S.SauceContainer>
  );
};
