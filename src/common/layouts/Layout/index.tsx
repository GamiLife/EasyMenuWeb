import * as React from 'react';
import Head from 'next/head';
import { Container, Layout } from '@gamiui/standard';

import { Header, Footer } from '..';
import * as S from './styles';
import homeBlock from '../../blocks/home-block.json';

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
      {/* <S.Content component={Layout.Content} blockId={homeBlock.WRAPPER_PAGE}>
        {children}
      </S.Content> */}
      <S.Content>
        <S.ContentContainer
          component={Container}
          blockId={homeBlock.WRAPPER_PAGE}
        >
          {children}
        </S.ContentContainer>
      </S.Content>
      <S.LayoutFooter>
        <Footer />
      </S.LayoutFooter>
    </Layout>
  );
};
