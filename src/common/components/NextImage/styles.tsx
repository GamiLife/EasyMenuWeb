import styled from '@emotion/styled';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { Block } from '../../layouts';

export const NextImage = styled(Block<IContainer>)<{
  $height: string;
}>`
  height: ${({ $height }) => $height};
  position: relative;
  width: 100%;
`;
