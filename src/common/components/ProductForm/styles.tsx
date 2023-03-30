import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const Selections = styled(Container)``;

export const ProductInlineBlock = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ProductQuantityTitle = styled(Title)`
  margin-right: 17px;
  min-width: 70px;
  font-size: 19px;
  color: ${lightTheme.primary.black};
`;

export const ProductSingleFixBottom = styled(Container)`
  margin: 5px 0;
`;

export const ProductPriceDetails = styled(Title)`
  margin: 0;
  flex: 1;
  font-size: 23px;
`;
