import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Icon, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';

export const ProductDetails = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 39px auto;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  padding-bottom: 40px;
  width: 90%;
`;

export const BreadcrumbContainer = styled(Container)`
  align-items: center;
  display: flex;
  grid-column: 1/3;
  padding-left: 60px;
`;

export const ContentContainer = styled(Container)`
  grid-column: 1/2;
  padding: 25px 74px 0 60px;
  width: 100%;
`;

export const BackLink = styled(Link)`
  column-gap: 0.5rem;
  display: flex;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 28px;
`;

export const BackIcon = styled(Icon)`
  display: inline;
`;

export const ProductTitle = styled(Title)`
  color: ${lightTheme.semantic.danger};
  line-height: 1.4;
  margin-block: 0 1.7rem;
  text-transform: capitalize;
`;

export const MainImageContainer = styled(Container)`
  grid-column: 2/3;
  width: 100%;
  position: relative;
`;

export const MainProductImage = styled(NextImage)`
  position: fixed;
  right: 7%;
  width: 35%;
  height: 250px;
  /* z-index: 2; */

  /* height: 400px; */
  /* top: 20%; */
`;
