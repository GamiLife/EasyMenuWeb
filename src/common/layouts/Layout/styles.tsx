import styled from '@emotion/styled';
import { Layout } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../Block';

export const LayoutWrapper = styled(Layout)`
  padding-top: 99px;
`;

export const LayoutHeader = styled(Layout.Header)`
  border-top: 4px solid ${lightTheme.primary.first};
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const Content = styled(Layout.Content)``;

export const ContentContainer = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.second};
  height: 100%;
  width: 100vw;
`;

export const LayoutFooter = styled(Layout.Footer)`
  background-color: ${lightTheme.primary.first};
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  overflow-x: hidden;
  position: relative;
`;
