import * as React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { RichText } from '@gamiui/standard';
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

  return (
    <React.Fragment>
      {/* <S.CartContentDrawer width={410} open={true} placement={'right'}>
        <S.SidebarLightNavyBlueBar>
          <S.CloseLink
            href={`${slugCompany}/${categoryName
              .toLowerCase()
              .replace(' ', '-')}/product/${pslug}`}
          ></S.CloseLink>
          <S.CloseLink
            href={`/${slugCompany}/${categoryName
              .toLowerCase()
              .replace(' ', '-')}/product/${pslug}`}
          ></S.CloseLink>
        </S.SidebarLightNavyBlueBar>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit
          possimus hic delectus a accusantium, rem tempore explicabo
          reprehenderit. Officia ipsam temporibus accusantium neque iste.
          Maiores quae libero laborum minus.
        </p>
      </S.CartContentDrawer> */}
      <S.ProductDetails>
        <S.BreadcrumbContainer>
          <NextBreadcrumbs />
        </S.BreadcrumbContainer>
        <S.ContentContainer>
          <S.BackLink href={`/${slugCompany}`}>
            <S.BackIcon name="setting" color={`${lightTheme.primary.black}`} />
            {t('pageProductDetails.back')}
          </S.BackLink>
          <S.ProductTitle level="h1">{title}</S.ProductTitle>
          <RichText text={description} margin="0 0 1.7rem" />
          <ProductForm
            priceByUnit={priceByUnit}
            combos={combos}
            maxItems={maxItems}
          />
        </S.ContentContainer>
        <S.MainImageContainer>
          {imageUrl && <S.MainProductImage imageUrl={imageUrl} alt={title} />}
        </S.MainImageContainer>
      </S.ProductDetails>
    </React.Fragment>
  );
};
