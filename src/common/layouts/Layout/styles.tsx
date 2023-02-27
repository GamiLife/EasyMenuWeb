import styled from '@emotion/styled';
import { Layout } from '@gamiui/standard';
import { IGenericEvents } from '@gamiui/standard/lib/types/core/domain/interfaces/IGeneralProps';
import { ILayoutElement } from '@gamiui/standard/lib/types/designSystem/layouts/Layout/Layout';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../Block';

export const LayoutHeader = styled(Layout.Header)`
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  z-index: 1;
`;

export const Content = styled(Layout.Content)`
  background-color: ${lightTheme.primary.second};
  width: 100vw;
`;

// export const Content = styled(Block<ILayoutElement & IGenericEvents>)`
//   background-color: ${lightTheme.primary.second};
//   width: 100vw;
// `;

export const LayoutFooter = styled(Layout.Footer)`
  background-color: ${lightTheme.primary.first};
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  overflow-x: hidden;
  position: relative;
`;
