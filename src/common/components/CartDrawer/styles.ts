import Link from 'next/link';
import styled from '@emotion/styled';
import { Drawer, Container, Icon, Button } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const CartDrawer = styled(Drawer)`
  border-top-left-radius: 0 !important;
  top: 100px !important;
  height: calc(100% - 100px);
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
`;

export const CartDrawerBar = styled(Container)`
  background-color: ${lightTheme.primary.first};
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;

export const CloseIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  min-width: 25px;
  opacity: 1;
  padding: 4px;
  border: 2px solid ${lightTheme.primary.white};
  border-radius: 100px;
  position: relative;
  margin-right: 10px;
  outline: 0;
  &::before,
  &::after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 14px;
    width: 2px;
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const CloseLink = styled(Link)`
  width: 25px;
  min-width: 25px;
  height: 25px;
  padding: 4px;
  border: 2px solid ${lightTheme.primary.white};
  border-radius: 100px;
  position: relative;
  margin-right: 10px;
  opacity: 1;
  &::before,
  &::after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 14px;
    width: 2px;
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const EmptyCart = styled(Container)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.3;
  font-size: 14px;
  flex-direction: column;
  padding: 0 12px;
  text-align: center;
`;

export const LetterButton = styled(Button)`
  background: transparent;
  border: 1px solid ${lightTheme.primary.first};
  border-radius: 3px;
  padding: 8px 71px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${lightTheme.primary.first};
  font-size: 13px;
`;
