import styled from '@emotion/styled';
import { Container, Floating, Icon, Input } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../Block';

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

export const SearchInput = styled(Input)`
  background-color: ${lightTheme.neutral[600]};
`;

export const SearchIcon = styled(Icon)`
  margin-bottom: 4px;
`;

export const HeaderRight = styled(Container)`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  padding: 1rem;
`;

export const LanguageSwitch = styled(Container)`
  cursor: pointer;
`;

export const CartCountContainer = styled(Container)`
  position: relative;
`;

export const CartCount = styled.span`
  align-items: center;
  background-color: ${lightTheme.primary.first};
  border-radius: 50px;
  color: ${lightTheme.primary.white};
  cursor: pointer;
  display: flex;
  font-size: 11px;
  height: 19px;
  justify-content: center;
  line-height: 1;
  position: absolute;
  right: -8px;
  top: -5px;
  width: 20px;
`;

export const FloatingMessage = styled(Floating)`
  background: #40c351;
  padding: 20px 0 18px;
`;
