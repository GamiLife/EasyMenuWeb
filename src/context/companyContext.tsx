import { createContext, useEffect, useState } from 'react';
import * as React from 'react';

import { get } from '../config/api';

export interface ICompanyContext {
  logos: ILogos[];
  socialNetworks: ISocialNetworks[];
  brand: IBrand;
  company: ICompany;
  setBrand: (brand: IBrand) => void;
  setCompany: (company: ICompany) => void;
}

export interface ICompanyProvider {
  children: React.ReactNode;
}

export interface ILogos {
  alt: string;
  src: string;
}

export interface IDetails {
  countryCode: string;
  phone: string;
  user: string;
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

export interface ISocialNetworks {
  description: string;
  details: IDetails;
  id: number;
  name: string;
}

export const defaultCompanyValues = {
  logos: [],
  socialNetworks: [],
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
    id: 1,
    name: '',
    slugUrl: '',
  });
  const [logos, setLogos] = useState<ILogos[]>([]);
  const [socialNetworks, setSocialNetworks] = useState<ISocialNetworks[]>([]);

  useEffect(() => {
    async function companyFetch() {
      const result = await get(`companies/slug/sea-fast-food`);
      // console.log(result);
      const { brand, logos, company, socialNetworks } = result.data;

      setBrand(brand);
      setCompany(company);
      setLogos(logos);
      setSocialNetworks(socialNetworks);
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
        setBrand,
        setCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
