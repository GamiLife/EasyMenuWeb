import { LinkProps } from 'next/link';
import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system';
import { Block } from '../../layouts';

export const NextBreadcrumbs = styled(Container)`
  align-items: center;
  display: flex;
  min-height: 39px;
`;

export const CrumbList = styled.ol`
  display: flex;
  list-style: none;
`;

export const LastCrumbItem = styled.li``;

export const LastCrumb = styled.span`
  color: ${lightTheme.extended.code};
  font-weight: 600;
`;

export const BreadcrumbLinkElement = styled.li``;

export const BreadcrumbLink = styled(
  Block<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
      LinkProps & {
        children?: React.ReactNode;
      } & React.RefAttributes<HTMLAnchorElement>
  >
)`
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
