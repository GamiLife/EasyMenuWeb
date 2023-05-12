import React from 'react';
import { useRouter } from 'next/router';

import { GetDishResponseDTO } from '../types/getDish.type';
import { CompanyContext } from '../../context';
import { useQueryData } from './useQueryData';

export interface IUseFetchDishByIdResponse {
  response: undefined | GetDishResponseDTO;
  pslug: string | string[] | undefined;
  isLoading: boolean;
}

export const useFetchDishById = (): IUseFetchDishByIdResponse => {
  const router = useRouter();
  const { pslug } = router.query;

  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { data, isLoading } = useQueryData({
    path: `dishes/slug/${pslug}?companyId=${id}`,
    queryKey: ['dishById', pslug as string],
    select: (data) => {
      return {
        response: data,
      };
    },
  });

  return {
    response: data?.response?.data,
    pslug,
    isLoading,
  };
};
