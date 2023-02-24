import Link from 'next/link';
import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';

export const NextBreadcrumbs = styled(Container)`
  align-items: center;
  display: flex;
  min-height: 39px;
`;

export const CrumbList = styled.ol`
  display: flex;
  list-style: none;
`;

export const LastCrumb = styled.span`
  color: ${lightTheme.extended.code};
  font-weight: 600;
`;

export const BreadcrumbLink = styled(Link)`
  color: ${lightTheme.neutral[300]};
  margin-right: 5px;
  padding: 0 3px;
  text-transform: capitalize;
`;

export const LastItemListCrumbs = styled.li`
  align-items: 'center';
  display: flex;
`;

export const BreadcrumbDivisor = styled.span`
  color: ${lightTheme.neutral[300]};
  display: inline-flex;
  margin-right: 5px;
  padding: 0 3px;
`;
