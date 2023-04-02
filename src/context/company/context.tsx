import React from 'react';

export interface ICompanyContext {
  brand: IBrand;
  company: ICompany;
  logos: ILogos[];
  socialNetworks: ISocialNetworks[];
  staticPages: IStaticPages[];
  isEnabledCompany: boolean;
  isFetched: boolean;
}

export interface ICompanyProvider {
  children: React.ReactNode;
}

export interface IBrand {
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
  id: number;
  countryCode: string;
  phone: string;
  user: string;
}

export interface IStaticPages {
  id: number;
  url: string;
}

export const defaultCompanyValues = {
  brand: {
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
  isEnabledCompany: true,
  isFetched: false,
};

export const defaultCompanySetter = {};

export const defaultCompanyContext = {
  ...defaultCompanyValues,
  ...defaultCompanySetter,
};

export const CompanyContext = React.createContext<ICompanyContext>({
  ...defaultCompanyContext,
});
