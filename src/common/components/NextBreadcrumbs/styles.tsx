import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, RichText } from '@gamiui/standard';

export const NextBreadcrumbs = styled(Container)``;

export const LastCrumb = styled.span`
  text-transform: capitalize;
  color: #333;
`;

export const BreadcrumbLink = styled(Link)`
  color: #bbb;
  margin-right: 5px;
  padding: 0 3px;
  text-transform: capitalize;
`;

export const BreadcrumbDivisor = styled.span`
  margin-right: 5px;

  display: inline-flex;
  padding: 0 3px;
  color: #bbb;
`;
