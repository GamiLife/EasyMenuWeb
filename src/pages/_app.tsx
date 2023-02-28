import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { ThemeGamification } from '@gamiui/standard';

import { I18nextProvider } from 'react-i18next';
import CompanyProvider from '../context/company/provider';
import ThemeProvider from '../context/theme/provider';
import HomeProvider from '../context/home/provider';
import i18n from './[slugCompany]/i18n';
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
        <HomeProvider>
          <ThemeProvider>
            <I18nextProvider i18n={i18n}>
              {getLayout(<Component {...pageProps} />)}
            </I18nextProvider>
          </ThemeProvider>
        </HomeProvider>
      </CompanyProvider>
    </ThemeGamification>
  );
}
