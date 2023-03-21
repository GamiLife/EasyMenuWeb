import styled from '@emotion/styled';
import { RichText } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../../layouts/Block';

export const Categories = styled(Block<IContainer>)`
  background: ${lightTheme.primary.white};
  border: 2px solid ${lightTheme.neutral[600]};
  border-radius: 22px;
  display: flex;
  justify-content: center;
  padding-block: 1rem;
`;
