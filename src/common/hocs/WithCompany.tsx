/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { NextComponentType, NextPageContext } from 'next';
import { useContext } from 'react';
import { CompanyContext } from '../../context';
import Custom404 from '../../pages/404';
import { EasyLoader } from '../components/EasyLoader';

export const WithCompany =
  (Component: NextComponentType<NextPageContext, any, any>) =>
  (props: Record<string, unknown>) => {
    const {
      company: { id },
      isEnabledCompany,
      isFetched,
    } = useContext(CompanyContext);

    if (!isFetched || id === 0) return <EasyLoader isLoading />;

    if (isEnabledCompany === false) {
      return <Custom404 />;
    }

    return <Component {...props} />;
  };
