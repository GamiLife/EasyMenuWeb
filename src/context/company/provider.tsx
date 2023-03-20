import * as React from 'react';
import { useRouter } from 'next/router';

import { CompanyContext, ICompanyProvider } from './context';
import { companyReducer, INITIAL_STATE } from './reducer';
import { get } from '../../config/api';

const CompanyProvider = ({ children }: ICompanyProvider) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const [state, dispatch] = React.useReducer(companyReducer, INITIAL_STATE);

  const {
    brand,
    company,
    logos,
    socialNetworks,
    staticPages,
    isEnabledCompany,
  } = state;

  React.useEffect(() => {
    if (!slugCompany) return;
    async function companyFetch() {
      try {
        const { data, statusCode } = await get(`companies/slug/${slugCompany}`);
        if (statusCode === 404) return;
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (e) {
        console.log(e);
      }
    }
    companyFetch();
  }, [slugCompany]);

  return (
    <CompanyContext.Provider
      value={{
        brand,
        company,
        logos,
        socialNetworks,
        staticPages,
        isEnabledCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
