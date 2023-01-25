import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const StoresList = styled(Container)`
  border-top: 1px solid ${lightTheme.neutral[200]};
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 0;
  padding-block: 25px 50px;
`;
