import styled from '@emotion/styled';
import { Button, Container } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { lightTheme } from '../../../../styles/design-system/theme';
import { Block } from '../../layouts';
import { NextImage } from '../NextImage';

export const SaucesArea = styled(Block<IContainer>)`
  background-color: ${lightTheme.primary.white};
  border: 1px solid ${lightTheme.neutral[400]};
  border-radius: 20px;
  padding: 10px 20px;
  width: 100%;
`;
