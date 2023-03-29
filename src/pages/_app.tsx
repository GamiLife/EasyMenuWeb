import React, { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeGamification } from '@gamiui/standard';

import CompanyProvider from '../context/company/provider';
import ThemeProvider from '../context/theme/provider';
import HomeProvider from '../context/home/provider';
import i18n from './[slugCompany]/i18n';
import '../../styles/globals.css';

type TComponent = NextComponentType<NextPageContext, any, any> & {
  getLayout: (children: React.ReactNode) => React.ReactNode;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as TComponent).getLayout ||
    ((children: React.ReactNode) => children);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        function (registration) {
          console.log(
            'Service Worker registration successful with scope: ',
            registration.scope
          );
        },
        function (err) {
          console.log('Service Worker registration failed: ', err);
        }
      );
    }
  }, []);

  return (
    <ThemeGamification>
      <QueryClientProvider client={queryClient}>
        <CompanyProvider>
          <HomeProvider>
            <ThemeProvider>
              <I18nextProvider i18n={i18n}>
                {getLayout(<Component {...pageProps} />)}
              </I18nextProvider>
            </ThemeProvider>
          </HomeProvider>
        </CompanyProvider>
      </QueryClientProvider>
    </ThemeGamification>
  );
}
