import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Card, Container, RichText, Title } from '@gamiui/standard';
import classNames from 'classnames';

import { HomeContext } from '../../../context/home';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
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
  const { slugCompany } = router.query;

  return (
    <S.Product>
      <S.ProductCard
        component={Card}
        blockId={homeBlock.PRODUCT_CARD}
        width="full"
        shadow="xs"
        rounded="md"
      >
        <Block.Tooltip blockId={homeBlock.PRODUCT_CARD} />
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
          title={
            <S.ProductName
              component={RichText}
              blockId={homeBlock.PRODUCT_CARD}
              text={title}
            />
          }
          description={
            <S.DescriptionCardContent
              component={Container}
              blockId={homeBlock.PRODUCT_CARD}
            >
              <RichText text={description} />
            </S.DescriptionCardContent>
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
              <S.ProductButton
                component={Button}
                blockId={homeBlock.SHIPPING_BUTTON}
                type="button"
                rounded="sm"
              >
                {' '}
                Comprar
              </S.ProductButton>
            </Link>
          </Container>
        </S.CardFooter>
      </S.ProductCard>
    </S.Product>
  );
};
