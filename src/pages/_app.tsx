import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { ThemeGamification } from '@gamiui/standard';

import ThemeProvider from '../context/ThemeContext';
import '../../styles/globals.css';

type TComponent = NextComponentType<NextPageContext, any, any> & {
  getLayout: (children: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as TComponent).getLayout ||
    ((children: React.ReactNode) => children);

  return (
    <ThemeProvider>
      <ThemeGamification>
        {getLayout(<Component {...pageProps} />)}
      </ThemeGamification>
    </ThemeProvider>
  );
}