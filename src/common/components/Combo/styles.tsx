import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { Block } from '../../layouts';

export const ComboArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto 15px;
`;

export const ComboAreaTitle = styled(Title)`
  font-size: 19px;
  color: ${lightTheme.primary.black};
  /* min-width: 70px; */
`;

export const ProductSetWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

export const ElementWrapper = styled(Container)`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ProductName = styled.label`
  color: #2e2e2e;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.strong`
  color: gray;
`;

export const OperatorsImageWrapper = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ProductImage = styled(NextImage)`
  flex-basis: 50px;
`;
