import React, { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { ThemeGamification } from '@gamiui/standard';

import { I18nextProvider } from 'react-i18next';
import CompanyProvider from '../context/company/provider';
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

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:3000') {
        console.log(event.data, 'Data from parent container');
      }
    });
  }, []);

  return (
    <ThemeGamification>
      <CompanyProvider>
        <HomeProvider>
          <I18nextProvider i18n={i18n}>
            {getLayout(<Component {...pageProps} />)}
          </I18nextProvider>
        </HomeProvider>
      </CompanyProvider>
    </ThemeGamification>
  );
}
