import { createContext, useEffect, useState } from 'react';
import * as React from 'react';

import { get } from '../config/api';
import { useRouter } from 'next/router';

export interface ICompanyContext {
  brand: IBrand;
  company: ICompany;
  logos: ILogos[];
  socialNetworks: ISocialNetworks[];
  staticPages: IStaticPages[];
  theme: ITheme[];
  setBrand: (brand: IBrand) => void;
  setCompany: (company: ICompany) => void;
}

export interface ICompanyProvider {
  children: React.ReactNode;
}

export interface IBrand {
  companyId: number;
  id: number;
  metaDescription: string;
  metaTitle: string;
}

export interface ICompany {
  description: string;
  id: number;
  name: string;
  slugUrl: string;
}

export interface ILogos {
  alt: string;
  brandId: number;
  id: number;
  src: string;
  type: string;
}

export interface ISocialNetworks {
  description: string;
  details: IDetails;
  id: number;
  name: string;
}

export interface IDetails {
  countryCode: string;
  phone: string;
  user: string;
}

export interface IStaticPages {
  id: number;
  url: string;
}

export interface ITheme {
  brandId: number;
  id: number;
  themeMode: string;
  type: string;
  value: string;
}

export const defaultCompanyValues = {
  brand: {
    companyId: 0,
    id: 0,
    metaDescription: '',
    metaTitle: '',
  },
  company: {
    description: '',
    id: 0,
    name: '',
    slugUrl: '',
  },
  logos: [],
  socialNetworks: [],
  staticPages: [],
  theme: [],
};

export const defaultCompanySetter = {
  setBrand: () => {
    return;
  },
  setCompany: () => {
    return;
  },
};

export const defaultCompanyContext = {
  ...defaultCompanyValues,
  ...defaultCompanySetter,
};

export const CompanyContext = createContext<ICompanyContext>({
  ...defaultCompanyContext,
});

const CompanyProvider = ({ children }: ICompanyProvider) => {
  const router = useRouter();
  const { slugCompany } = router.query;

  const [brand, setBrand] = useState(defaultCompanyValues.brand);
  const [company, setCompany] = useState(defaultCompanyValues.company);
  const [logos, setLogos] = useState<ILogos[]>(defaultCompanyValues.logos);
  const [socialNetworks, setSocialNetworks] = useState<ISocialNetworks[]>(
    defaultCompanyValues.socialNetworks
  );
  const [staticPages, setStaticPages] = useState<IStaticPages[]>(
    defaultCompanyValues.staticPages
  );
  const [theme, setTheme] = useState<ITheme[]>(defaultCompanyValues.theme);

  useEffect(() => {
    if (!slugCompany) return;
    async function companyFetch() {
      const { data } = await get(`companies/slug/${slugCompany}`);
      const { brand, company, logos, socialNetworks, staticPages, theme } =
        data;

      setBrand(brand);
      setCompany(company);
      setLogos(logos);
      setSocialNetworks(socialNetworks);
      setStaticPages(staticPages);
      setTheme(theme);
    }
    companyFetch();
  }, [logos, socialNetworks, slugCompany]);

  return (
    <CompanyContext.Provider
      value={{
        brand,
        company,
        logos,
        socialNetworks,
        staticPages,
        theme,
        setBrand,
        setCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
