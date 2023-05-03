import * as React from 'react';
import { useRouter } from 'next/router';
import { RichText } from '@gamiui/standard';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { useFetchDishById } from '../../hooks/useFetchDishById';
import NextBreadcrumbs from '../NextBreadcrumbs';
import { ProductForm } from '../ProductForm';
import { HomeContext } from '../../../context';
import { lightTheme } from '../../../../styles/design-system';
import { Spinner } from '../Spinner';
import * as S from './styles';

export const ProductDetails = () => {
  const router = useRouter();
  const { slugCompany, pslug } = router.query;
  // router.query
  // console.log(router.query?.cartId);
  const { categoryName } = React.useContext(HomeContext);

  const { t } = useTranslation();
  const { response, isLoading } = useFetchDishById();

  if (!response) return null;
  const {
    title,
    description,
    imageUrl,
    priceByUnit,
    combos,
    maxItems,
    id,
    slug,
  } = response;

  if (isLoading) return <Spinner isLoading={isLoading} />;

  console.log(categoryName); //seafoods
  const removeWhiteSpace = (text: string) => {
    do {
      text = text.replace(' ', '-');
    } while (text.includes(' '));
    return (text.charAt(0) + text.slice(1)).toLowerCase();
  };
  console.log(removeWhiteSpace(categoryName));
  console.log(
    `${slugCompany}/${removeWhiteSpace(categoryName)}/product/${slug}`
  );
  console.log(router.asPath);

  return (
    <React.Fragment>
      <S.ProductDetails>
        <S.BreadcrumbContainer>
          <NextBreadcrumbs />
        </S.BreadcrumbContainer>
        <S.ContentContainer>
          <S.BackLink href={`/${slugCompany}`}>
            <S.BackIcon name="setting" color={`${lightTheme.primary.black}`} />
            {t('pageProductDetails.back')}
          </S.BackLink>
          {router.asPath !==
            `${slugCompany}/${removeWhiteSpace(
              categoryName
            )}/product/${slug}` && (
            <S.ModifyProductHeader level="h6">
              Modificando producto del carrito de compras
            </S.ModifyProductHeader>
          )}

          <S.ProductTitle level="h1">{title}</S.ProductTitle>
          <RichText text={description} margin="0 0 1.7rem" />
          <ProductForm
            priceByUnit={priceByUnit}
            combos={combos}
            maxItems={maxItems}
            title={title}
            description={description}
            imageUrl={imageUrl}
          />
        </S.ContentContainer>
        <S.MainImageContainer>
          {imageUrl && <S.MainProductImage imageUrl={imageUrl} alt={title} />}
        </S.MainImageContainer>
      </S.ProductDetails>
    </React.Fragment>
  );
};
