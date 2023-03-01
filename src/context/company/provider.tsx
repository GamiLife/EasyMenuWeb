import * as React from 'react';
import { useRouter } from 'next/router';

import {
  CompanyContext,
  defaultCompanyValues,
  ICompanyProvider,
  ILogos,
  ISocialNetworks,
  IStaticPages,
  ITheme,
} from './context';
import { get } from '../../config/api';

const CompanyProvider = ({ children }: ICompanyProvider) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const [brand, setBrand] = React.useState(defaultCompanyValues.brand);
  const [company, setCompany] = React.useState(defaultCompanyValues.company);
  const [logos, setLogos] = React.useState<ILogos[]>(
    defaultCompanyValues.logos
  );
  const [socialNetworks, setSocialNetworks] = React.useState<ISocialNetworks[]>(
    defaultCompanyValues.socialNetworks
  );
  const [staticPages, setStaticPages] = React.useState<IStaticPages[]>(
    defaultCompanyValues.staticPages
  );
  const [theme, setTheme] = React.useState<ITheme[]>(
    defaultCompanyValues.theme
  );
  const [isEnabledCompany, setIsEnabledCompany] = React.useState(
    defaultCompanyValues.isEnabledCompany
  );

  React.useEffect(() => {
    if (!slugCompany) return;
    async function companyFetch() {
      const { data, statusCode } = await get(`companies/slug/${slugCompany}`);
      if (statusCode === 404) return;
      if (statusCode !== 404) {
        setIsEnabledCompany(true);
      }

      const { brand, company, logos, socialNetworks, staticPages, theme } =
        data;

      setBrand(brand);
      setCompany(company);
      setLogos(logos);
      setSocialNetworks(socialNetworks);
      setStaticPages(staticPages);
      setTheme(theme);
      setIsEnabledCompany(true);
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
        theme,
        isEnabledCompany,
        setBrand,
        setCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
