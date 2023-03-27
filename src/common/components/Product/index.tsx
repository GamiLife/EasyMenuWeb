import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Card, Container, RichText, Title } from '@gamiui/standard';
import classNames from 'classnames';

import { useCustomTranslation } from '../../hooks';
import { HomeContext } from '../../../context/home';
import { IProduct } from '../ProductList';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
import * as S from './styles';

export const Product = ({
  title,
  description,
  priceByUnit,
  imageUrl,
  slug,
}: IProduct) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const { categoryName } = useContext(HomeContext);

  const { t } = useCustomTranslation();

  const removeWhiteSpace = (text: string) => {
    do {
      text = text.replace(' ', '-');
    } while (text.includes(' '));
    return (text.charAt(0) + text.slice(1)).toLowerCase();
  };

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
          href={`${slugCompany}/${removeWhiteSpace(
            categoryName
          )}/product/${slug}`}
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
              allowBorder={false}
              text={title}
            />
          }
          description={
            <S.DescriptionCardContent
              component={Container}
              blockId={homeBlock.PRODUCT_CARD}
              allowBorder={false}
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
            <Title level="h3">S/{priceByUnit}</Title>
          </Container>
          <Container>
            <Link
              href={`${slugCompany}/${removeWhiteSpace(
                categoryName
              )}/product/${slug}`}
            >
              <S.ProductButton
                component={Button}
                blockId={homeBlock.SHIPPING_BUTTON}
                type="button"
                rounded="sm"
              >
                {t('pageHome.productLinkText')}
              </S.ProductButton>
            </Link>
          </Container>
        </S.CardFooter>
      </S.ProductCard>
    </S.Product>
  );
};
