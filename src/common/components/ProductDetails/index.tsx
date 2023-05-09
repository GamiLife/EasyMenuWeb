import * as React from 'react';
import { useRouter } from 'next/router';
import { RichText } from '@gamiui/standard';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { useRemoveWhiteSpace } from '../../hooks';
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
  const { hyphenatedText } = useRemoveWhiteSpace({ text: categoryName });

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
            `/${slugCompany}/${hyphenatedText}/product/${slug}` && (
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
            slug={slug}
          />
        </S.ContentContainer>
        <S.MainImageContainer>
          {imageUrl && <S.MainProductImage imageUrl={imageUrl} alt={title} />}
        </S.MainImageContainer>
      </S.ProductDetails>
    </React.Fragment>
  );
};
