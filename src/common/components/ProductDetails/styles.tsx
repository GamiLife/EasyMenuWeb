import Link from 'next/link';
import styled from '@emotion/styled';
import { Button, Container, Icon, Title } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../../layouts';

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
  padding: 0 100px;
`;

export const ContentContainer = styled(Container)`
  grid-column: 1/2;
  padding: 25px 100px 0;
  width: 100%;
`;

export const BackLink = styled(Link)`
  column-gap: 0.5rem;
  display: flex;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 1.8rem;
`;

export const BackIcon = styled(Icon)`
  color: ${lightTheme.neutral[300]};
  display: inline;
`;

export const ProductTitle = styled(Title)`
  color: ${lightTheme.semantic.danger};
  line-height: 1.4;
  margin-block: 0 1.7rem;
  text-transform: capitalize;
`;

export const Selections = styled(Container)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  margin-block: 0 1.7rem;
`;

export const SaucesArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
`;

export const SaucesTitle = styled(Title)`
  font-size: 19px;
`;

export const Label = styled.label`
  margin-right: 2rem;
`;

export const DishesArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
`;

export const DishesTitle = styled(Title)`
  font-size: 19px;
`;

export const AddButtonContainer = styled(Container)``;

export const AddButton = styled(Button)`
  background-color: ${lightTheme.primary.first};
  border-radius: 15px;
  color: ${lightTheme.primary.white};
  cursor: pointer;
  font-size: 20px;
  margin: auto;
  padding: 8px 19px 3px;
  text-transform: uppercase;
  width: 90%;
`;

export const PriceImageContainer = styled(Container)`
  flex-direction: column;
  grid-column: 2/3;
  padding: 25px 100px 0;
  row-gap: 2rem;
  width: 100%;
`;

export const ProductPriceDetails = styled.label`
  font-weight: bold;
  text-align: center;
`;
