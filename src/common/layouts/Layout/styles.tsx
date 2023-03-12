import styled from '@emotion/styled';
import { Layout } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../Block';

export const LayoutHeader = styled(Layout.Header)`
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  z-index: 1;
`;

export const Content = styled(Layout.Content)``;

export const ContentContainer = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.second};
  width: 100vw;
  height: 100%;
`;

export const LayoutFooter = styled(Layout.Footer)`
  background-color: ${lightTheme.primary.first};
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  overflow-x: hidden;
  position: relative;
`;
