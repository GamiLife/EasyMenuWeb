import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const Tooltip = styled(Container)`
  padding: 5px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0px;
  z-index: 1;

  backdrop-filter: blur(10px);
  background: #ffffff3b;
  border-bottom: 2px solid ${lightTheme.primary.jordyBlue};
  border-left: 2px solid ${lightTheme.primary.jordyBlue};

  &:hover {
    cursor: pointer;
  }
`;
