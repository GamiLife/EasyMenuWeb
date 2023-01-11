import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const Header = styled(Container)`
  background-color: ${lightTheme.primary.white};
  display: flex;
  justify-content: space-between;
  max-height: 100px;
  padding: 1rem;
`;

export const HeaderLeft = styled(Container)`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const TitleBrand = styled(Title)`
  color: ${lightTheme.primary.black};
`;