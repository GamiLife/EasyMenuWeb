/* eslint-disable react/display-name */
import { NextComponentType, NextPageContext } from 'next';
import { LayoutWrapper } from '../layouts';

export interface IWithLayout {
  title: string;
  description: string;
}

export const WithLayout =
  ({ description, title }: IWithLayout) =>
  (Component: NextComponentType<NextPageContext, any, any>) =>
  (props: Record<string, unknown>) => {
    return (
      <LayoutWrapper title={title} description={description}>
        <Component {...props} />;
      </LayoutWrapper>
    );
  };
