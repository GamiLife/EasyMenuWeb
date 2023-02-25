import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../Block';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

export const Header = styled(Block<IContainer>)`
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
  width: 160px;
`;

export const HeaderLink = styled(Link)`
  width: 100%;
`;

export const SearchIcon = styled(Icon)`
  margin-bottom: 4px;
`;
