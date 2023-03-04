import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';
import { lightTheme } from '../../../../styles/design-system';

export const Tooltip = styled(Container)`
  position: absolute;
  text-align: center;
  padding: 5px;
  z-index: 1;
  right: 0;
  top: 0px;

  border-left: 2px solid ${lightTheme.primary.jordyBlue};
  border-bottom: 2px solid ${lightTheme.primary.jordyBlue};
  backdrop-filter: blur(10px);
  background: #ffffff3b;

  &:hover {
    cursor: pointer;
  }
`;
