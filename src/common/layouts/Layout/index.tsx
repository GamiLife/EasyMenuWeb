import * as React from 'react';
import Head from 'next/head';
import { Container } from '@gamiui/standard';

import { Header, Footer, Block } from '..';
import homeBlock from '../../blocks/home-block.json';
import * as S from './styles';
import { ThemeContext } from '../../../context';

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
  const { previewThemeBlocks } = React.useContext(ThemeContext);

  return (
    <S.LayoutWrapper>
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
      <S.Content>
        <S.ContentContainer
          component={Container}
          blockId={homeBlock.WRAPPER_PAGE}
        >
          <Block.Tooltip blockId={homeBlock.WRAPPER_PAGE} />
          {children}
        </S.ContentContainer>
      </S.Content>
      <S.LayoutFooter>
        <Footer />
      </S.LayoutFooter>
    </S.LayoutWrapper>
  );
};
