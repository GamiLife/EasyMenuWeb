import React from 'react';
import { Card, Container } from '@gamiui/standard';

import * as S from './styles';

export const CartBody = () => {
  return (
    <S.CartBody>
      <S.CartItemList>
        <S.CartItem>
          <S.CartCard>
            <Card.Cover className="card__cover">
              <S.ProductImage
                imageUrl="https://frdadmin21.fridaysperu.com/media/catalog/product/w/i/wings-texas-spiced-bbq.jpg"
                alt=""
              />
            </Card.Cover>
            <Card.Content
              title={
                <S.ProductName>
                  Tex Mex Platter + 4 bebidas gratis
                </S.ProductName>
              }
              description={
                <React.Fragment>
                  <S.ProductDescription text="6 Chicken Tacos, 1 Beef Burrito y 1 Pork Burrito. Acompañamos con chips, frejoles de la casa, guacamole y salsa de queso con trocitos de tocino." />
                  <Container margin="0 0 20px">
                    <Container margin="0 0 4px">
                      <S.BTag>Precio:</S.BTag>
                      <S.SpanTag>S/ 115.00</S.SpanTag>
                    </Container>
                    <Container margin="0 0 4px">
                      <S.BTag>Cantidad:</S.BTag>
                      <S.SpanTag>1</S.SpanTag>
                    </Container>
                  </Container>
                  <S.ProductActions className="product-actions">
                    <S.ProductButton>Modificar</S.ProductButton>
                    <S.ProductButton className="product-actions__transparent">
                      Eliminar
                    </S.ProductButton>
                  </S.ProductActions>
                </React.Fragment>
              }
              className="card__content"
            />
          </S.CartCard>
        </S.CartItem>
      </S.CartItemList>
    </S.CartBody>
  );
};
