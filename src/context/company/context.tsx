import React from 'react';

export interface ICompanyContext {
  brand: IBrand;
  company: ICompany;
  logos: ILogos[];
  socialNetworks: ISocialNetworks[];
  staticPages: IStaticPages[];
  theme: ITheme[];
  isEnabledCompany: boolean;
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
  isEnabledCompany: false,
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

export const CompanyContext = React.createContext<ICompanyContext>({
  ...defaultCompanyContext,
});
