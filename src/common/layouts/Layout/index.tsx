import { Layout } from '@gamiui/standard';
import * as React from 'react';
import { Header, Footer } from '..';
import * as S from './styles';

export interface ILayoutWrapper {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: ILayoutWrapper) => {
  return (
    <Layout>
      <S.LayoutHeader>
        <Header />
      </S.LayoutHeader>
      <S.Content>{children}</S.Content>
    </Layout>
  );
};
