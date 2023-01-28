import { createContext, useEffect, useState } from 'react';
import * as React from 'react';

import { get } from '../config/api';

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
  const [brand, setBrand] = useState({
    companyId: 0,
    id: 0,
    metaDescription: '',
    metaTitle: '',
  });
  const [company, setCompany] = useState({
    description: '',
    id: 0,
    name: '',
    slugUrl: '',
  });
  const [logos, setLogos] = useState<ILogos[]>([]);
  const [socialNetworks, setSocialNetworks] = useState<ISocialNetworks[]>([]);
  const [staticPages, setStaticPages] = useState<IStaticPages[]>([]);
  const [theme, setTheme] = useState<ITheme[]>([]);

  useEffect(() => {
    async function companyFetch() {
      const { data } = await get(`companies/slug/sea-fast-food`);
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
  }, [logos, socialNetworks]);

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
