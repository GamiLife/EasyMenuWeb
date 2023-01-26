import { createContext, useEffect, useState } from 'react';
import * as React from 'react';

import { get } from '../config/api';

export interface ICompanyContext {
  metaDescription: string;
  metaTitle: string;
  logos: ILogos[];
}

export interface ICompanyProvider {
  children: React.ReactNode;
}

export interface ILogos {
  alt: string;
  src: string;
}

export const defaultCompanyValues = {
  metaDescription: '',
  metaTitle: '',
  logos: [],
};

export const defaultCompanySetter = {};

export const defaultCompanyContext = {
  ...defaultCompanyValues,
  ...defaultCompanySetter,
};

export const CompanyContext = createContext<ICompanyContext>({
  ...defaultCompanyContext,
});

const CompanyProvider = ({ children }: ICompanyProvider) => {
  const [brand, setBrand] = useState({
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
  const [socialNetworks, setSocialNetworks] = useState([]);

  const { metaDescription, metaTitle } = brand;

  useEffect(() => {
    async function companyFetch() {
      const { data } = await get(`companies/slug/sea-fast-food`);
      console.log(data);
      const { brand, company, logos, socialNetworks } = data;
      const { metaDescription, metaTitle } = brand;
      const { description, id, name, slugUrl } = company;

      setBrand({
        metaDescription,
        metaTitle,
      });
      setCompany({
        description,
        id,
        name,
        slugUrl,
      });
      setLogos(logos);
      setSocialNetworks(socialNetworks);
    }
    companyFetch();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        metaDescription,
        metaTitle,
        logos,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
