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
}

export const Product = ({ description, id, imageUrl, price, title }: IProduct) => {

  const { categoryName } = useContext(ThemeContext);

  return (
    <S.Product>
      <Card width='full' shadow='xs' rounded='md'>
        <Link href={`/${categoryName.toLowerCase().replace(' ', '-')}/product/${id}`}>
          <Card.Cover>
            <NextImage imageUrl={imageUrl} alt={title} />
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
            margin='0 0 1rem'
          >
            <S.WishListIcon name='heart' />
            <Title level='h3'>S/{price}</Title>
          </Container>
          <Container>
            <Link href={`/${categoryName.toLowerCase().replace(' ', '-')}/product/${id}`}>
              <S.ProductButton
                type='button'
                rounded='sm'
              >
                Ver
              </S.ProductButton>
            </Link>
          </Container>
        </S.CardFooter>
      </Card>
    </S.Product>
  );
};