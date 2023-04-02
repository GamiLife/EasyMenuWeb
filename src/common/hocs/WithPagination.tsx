/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { NextComponentType, NextPageContext } from 'next';
import PaginationProvider from '../../context/pagination/provider';

export const WithPagination =
  (Component: NextComponentType<NextPageContext, any, any>) =>
  (props: Record<string, unknown>) => {
    return (
      <PaginationProvider>
        <Component {...props} />
      </PaginationProvider>
    );
  };
