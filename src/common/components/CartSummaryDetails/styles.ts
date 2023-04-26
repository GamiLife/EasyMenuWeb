import styled from '@emotion/styled';
import { Button, Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const CartSummaryDetails = styled(Container)`
  background: ${lightTheme.primary.white};
  box-shadow: 0 -2px 9px rgba(0, 0, 0, 0.11);
  padding: 17px 21px 4px;
  position: relative;
`;

export const PaymentSummary = styled(Container)`
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

  display: inline-block;
`;

export const SpanTag = styled.span`
  color: ${lightTheme.primary.black};
  font-size: 17px;
  width: 60%;
  text-align: right;
`;

export const SummaryActions = styled(Container)`
  & .summary-actions__keep-buying {
    color: ${lightTheme.primary.first};
    background: transparent;
    border-color: transparent;
  }
`;

export const SummaryButton = styled(Button)`
  display: block;
  width: 95%;
  margin: auto auto 7px;
  padding: 5px;
  text-transform: uppercase;
  box-shadow: none;

  font-size: 19px;

  border-radius: 15px;
  background: ${lightTheme.primary.first};
  border: none;
  text-align: center;
  color: ${lightTheme.primary.white};
`;
