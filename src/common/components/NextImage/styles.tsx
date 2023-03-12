import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';
import { IContainer } from '@gamiui/standard/lib/types/designSystem/layouts/Container/Container';

import { Block } from '../../layouts';

export const NextImage = styled(Container)<{
  $height: string;
}>`
  height: ${({ $height }) => $height};
  position: relative;
  width: 100%;
`;
