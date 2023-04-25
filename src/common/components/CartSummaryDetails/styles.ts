import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const CartSummaryDetails = styled(Container)`
  background: ${lightTheme.primary.white};
  box-shadow: 0 -2px 9px rgba(0, 0, 0, 0.11);
  padding: 17px 21px 4px;
  position: relative;
`;

export const CartSummary = styled(Container)`
  margin-bottom: 14px;
  padding: 0 10px;
`;

export const BaseContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const BTag = styled.b`
  font-size: 17px;
  color: ${lightTheme.primary.black};
  width: 35%;
`;
