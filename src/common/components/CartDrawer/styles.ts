import Link from 'next/link';
import styled from '@emotion/styled';
import { Drawer, Container } from '@gamiui/standard';

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

export const SidebarLightNavyBlueBarText = styled(Container)``;
