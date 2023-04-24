import { Card } from '@gamiui/standard';

import * as S from './styles';

export const CartBody = () => {
  return (
    <S.CartBody>
      <S.CartItemList>
        <S.CartItem>
          <S.CartProductCard>
            <Card.Cover className="card__cover">
              <S.ProductImage imageUrl="" alt="" />
            </Card.Cover>
          </S.CartProductCard>
        </S.CartItem>
      </S.CartItemList>
    </S.CartBody>
  );
};
