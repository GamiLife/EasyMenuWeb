import { defaultCompanyValues, ICompanyContext } from './context';

type CompanyAction = { type: 'FETCH_SUCCESS'; payload: ICompanyContext };

export const INITIAL_STATE = {
  ...defaultCompanyValues,
};

export const companyReducer = (
  state: ICompanyContext,
  action: CompanyAction
): ICompanyContext => {
  const { brand, company, logos, socialNetworks, staticPages } = action.payload;
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        brand,
        company,
        logos,
        socialNetworks,
        staticPages,
        isEnabledCompany: true,
        isFetched: false,
      };
    default:
      return state;
  }
};
