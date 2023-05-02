import React, { Dispatch, SetStateAction } from 'react';
import { Card, Container } from '@gamiui/standard';

import { CartContext, ICartProduct } from '../../../context/cart';
import * as S from './styles';
import { useRouter } from 'next/router';

export interface ICartBody {
  cartProducts: ICartProduct[];
  setCartProducts: Dispatch<SetStateAction<ICartProduct[]>>;
}

export const CartBody = ({ cartProducts, setCartProducts }: ICartBody) => {
  const router = useRouter();
  const { setIsEnabledCart } = React.useContext(CartContext);

  function handleRemove(cartId: number) {
    const cartProductsFiltered = cartProducts.filter(
      (cartProduct) => cartProduct.cartId !== cartId
    );
    setCartProducts(cartProductsFiltered);
  }

  function handleModify(productUrl: string, cartId: number) {
    setIsEnabledCart(false);
    router.push(`${productUrl}?cartId=${cartId}`);
    // /[slugCompany]/[categoryDynamic]/product/[slug]?cartId=1
  }

  return (
    <S.CartBody>
      <S.CartItemList>
        {cartProducts.map(
          ({
            imageUrl,
            title,
            description,
            totalPrice,
            quantity,
            cartId,
            productUrl,
          }) => (
            <S.CartItem key={cartId}>
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
                        <S.ProductButton
                          onClick={() => handleModify(productUrl, cartId)}
                        >
                          Modificar
                        </S.ProductButton>
                        <S.ProductButton
                          className="product-actions__remove"
                          onClick={() => handleRemove(cartId)}
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
