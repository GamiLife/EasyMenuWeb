import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { ThemeGamification } from '@gamiui/standard';

import CompanyProvider from '../context/CompanyContext';
import 'nextjs-breadcrumbs/dist/index.css';
import '../../styles/globals.css';

type TComponent = NextComponentType<NextPageContext, any, any> & {
  getLayout: (children: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as TComponent).getLayout ||
    ((children: React.ReactNode) => children);

  return (
    <ThemeGamification>
      <CompanyProvider>
        {getLayout(<Component {...pageProps} />)}
      </CompanyProvider>
    </ThemeGamification>
  );
}
