import * as React from 'react';
import Head from 'next/head';
import { Layout } from '@gamiui/standard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from '../../../pages/[slugCompany]/i18n';
import { Header, Footer } from '..';
import * as S from './styles';

export interface ILayoutWrapper {
  children: React.ReactNode;
  description: string;
  title: string;
  jsonLd?: string;
}

export const LayoutWrapper = ({
  children,
  description,
  title,
  jsonLd,
}: ILayoutWrapper) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
            // dangerouslySetInnerHTML={addProductJsonLd()}
            key="product-jsonld"
          />
        )}
      </Head>
      <S.LayoutHeader>
        <Header />
      </S.LayoutHeader>
      <S.Content>{children}</S.Content>
      <S.LayoutFooter>
        <Footer />
      </S.LayoutFooter>
    </Layout>
  );
};
