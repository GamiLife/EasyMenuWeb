import styled from '@emotion/styled';
import { Layout } from '@gamiui/standard';
import { lightTheme } from '../../../../styles/design-system/theme';

export const Content = styled(Layout.Content)`
  background-color: ${lightTheme.primary.second};
`;

export const LayoutHeader = styled(Layout.Header)`
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  z-index: 1;
`;
