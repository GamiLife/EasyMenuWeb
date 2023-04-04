import React, { Fragment, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeGamification } from '@gamiui/standard';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import ProductFormProvider from '../context/productForm/provider';
import CompanyProvider from '../context/company/provider';
import { WithCompany } from '../common/hocs';
import ThemeProvider from '../context/theme/provider';
import i18n from './[slugCompany]/i18n';
import '../../styles/globals.css';

const BasePage = WithCompany(({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
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
        <ReactQueryDevtools initialIsOpen={false} />
        <SkeletonTheme baseColor="#f0ecec" highlightColor="#dfdfdf">
          <I18nextProvider i18n={i18n}>
            <CompanyProvider>
              <ThemeProvider>
                <ProductFormProvider>
                  <BasePage>
                    <Component {...pageProps} />
                  </BasePage>
                </ProductFormProvider>
              </ThemeProvider>
            </CompanyProvider>
          </I18nextProvider>
        </SkeletonTheme>
      </QueryClientProvider>
    </ThemeGamification>
  );
}
