import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import { Card, Container, RichText, Title } from '@gamiui/standard';

import { HomeContext } from '../../../context/home';
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
  imageUrl,
  price,
  title,
  slug,
}: IProduct) => {
  const { categoryName } = useContext(HomeContext);

  const router = useRouter();
  // console.log(router);
  const { slugCompany } = router.query;

  return (
    <S.Product>
      <Card width="full" shadow="xs" rounded="md">
        <Link
          href={`${slugCompany}/${categoryName
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
              href={`${slugCompany}/${categoryName
                .toLowerCase()
                .replace(' ', '-')}/product/${slug}`}
            >
              <S.ProductButton type="button" rounded="sm">
                Comprar
              </S.ProductButton>
            </Link>
          </Container>
        </S.CardFooter>
      </Card>
    </S.Product>
  );
};
