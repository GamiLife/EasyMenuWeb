import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../styles/design-system/theme';
import { flex } from '../../../styles/design-system';

export const PageError = styled(Container)`
  ${flex({
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  })}

  margin: 0 auto;
  min-height: calc(100vh - 100px);
  padding: 2rem;
  row-gap: 4rem;
  width: 740px;
`;

export const ContentError = styled(Container)`
  ${flex({
    alignItems: 'center',
    flexDirection: 'column',
  })}
  row-gap: 1rem;
`;

export const TitleError = styled(Title)`
  text-transform: uppercase;
`;

export const ImageError = styled(Container)``;

export const BackLink = styled(Link)`
  background: ${lightTheme.semantic.danger};
  border-radius: 25px;
  color: ${lightTheme.primary.white};
  max-width: 100%;
  padding: 14px 20px 14px;
  text-align: center;
  text-transform: uppercase;
  width: 200px;
`;
