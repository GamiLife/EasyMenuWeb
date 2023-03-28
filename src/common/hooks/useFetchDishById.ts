import React from 'react';
import { useRouter } from 'next/router';

import { CompanyContext } from '../../context';
import { useQueryData } from './useQueryData';

export const useFetchDishById = () => {
  const router = useRouter();
  const { pslug } = router.query;

  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { data, isLoading } = useQueryData(
    `dishes/slug/${pslug}?companyId=${id}`,
    ['dishById', pslug as string],
    (data) => {
      return {
        response: data,
      };
    }
  );

  return {
    response: data?.response,
    pslug,
    isLoading,
  };
};
