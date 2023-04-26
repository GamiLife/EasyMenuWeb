import React from 'react';
import { Card, Container } from '@gamiui/standard';

import { CartContext, ICartProduct } from '../../../context/cart';
import * as S from './styles';

export interface ICartBody {
  cartProducts: ICartProduct[];
}

export const CartBody = ({ cartProducts }: ICartBody) => {
  // const { cartProducts } = React.useContext(CartContext);

  function handleRemove(id: number) {}

  return (
    <S.CartBody>
      <S.CartItemList>
        {cartProducts.map(
          ({ id, imageUrl, title, description, totalPrice, quantity }) => (
            <S.CartItem key={id}>
              <S.CartCard>
                <Card.Cover className="card__cover">
                  <S.ProductImage imageUrl={imageUrl} alt={title} />
                </Card.Cover>
                <Card.Content
                  className="card__content"
                  title={<S.ProductName>{title}</S.ProductName>}
                  description={
                    <React.Fragment>
                      <S.ProductDescription text={description} />
                      <Container margin="0 0 20px">
                        <Container margin="0 0 4px">
                          <S.BTag>Precio:</S.BTag>
                          <S.SpanTag>S/ {totalPrice}</S.SpanTag>
                        </Container>
                        <Container margin="0 0 4px">
                          <S.BTag>Cantidad:</S.BTag>
                          <S.SpanTag>{quantity}</S.SpanTag>
                        </Container>
                      </Container>
                      <S.ProductActions className="product-actions">
                        <S.ProductButton>Modificar</S.ProductButton>
                        <S.ProductButton
                          className="product-actions__remove"
                          onClick={() => handleRemove(id)}
                        >
                          Eliminar
                        </S.ProductButton>
                      </S.ProductActions>
                    </React.Fragment>
                  }
                />
              </S.CartCard>
            </S.CartItem>
          )
        )}
      </S.CartItemList>
      {/* cart-recommended */}
    </S.CartBody>
  );
};
