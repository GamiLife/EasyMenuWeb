/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useRouter } from 'next/router';

import { CompanyContext, ICompanyProvider } from './context';
import { companyReducer, INITIAL_STATE } from './reducer';
import { useQueryData } from '../../common/hooks';

const CompanyProvider = ({ children }: ICompanyProvider) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const { data, isFetched } = useQueryData({
    path: `companies/slug/${slugCompany}`,
    queryKey: ['companies'],
    enabled: !!slugCompany,
  });
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
    if (!data?.data) return;
    if (data?.statusCode === 404) return;
    dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
  }, [JSON.stringify(data)]);

  return (
    <CompanyContext.Provider
      value={{
        brand,
        company,
        logos,
        socialNetworks,
        staticPages,
        isEnabledCompany,
        isFetched,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
