import { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Card, Container, RichText, Title } from '@gamiui/standard';

import { ThemeContext } from '../../../context/ThemeContext';
import { NextImage } from '../NextImage';
import * as S from './styles';

export interface IProduct {
  description: string;
  id?: number;
  imageUrl: string;
  price: number;
  title: string;
  slug: string;
}

export const Product = ({
  description,
  id,
  imageUrl,
  price,
  title,
  slug,
}: IProduct) => {
  const { categoryName } = useContext(ThemeContext);

  return (
    <S.Product>
      <Card width="full" shadow="xs" rounded="md">
        <Link
          href={`/${categoryName
            .toLowerCase()
            .replace(' ', '-')}/product/${slug}`}
        >
          <Card.Cover>
            <S.ProductImage
              imageUrl={imageUrl}
              alt={title}
              className="product__image"
            />
          </Card.Cover>
        </Link>
        <Card.Content
          title={<S.ProductName text={title} />}
          description={
            <Container>
              <RichText text={description} />
            </Container>
          }
        />
        <S.CardFooter>
          <Container
            className={classNames('flex', 'justify-between')}
            margin="0 0 1rem"
          >
            <S.WishListIcon name="heart" />
            <Title level="h3">S/{price}</Title>
          </Container>
          <Container>
            <Link
              href={`/${categoryName
                .toLowerCase()
                .replace(' ', '-')}/product/${slug}`}
            >
              <S.ProductButton type="button" rounded="sm">
                Ver
              </S.ProductButton>
            </Link>
          </Container>
        </S.CardFooter>
      </Card>
    </S.Product>
  );
};
