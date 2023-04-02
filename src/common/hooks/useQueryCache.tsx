import { useQueryClient } from '@tanstack/react-query';
import { query } from './useQueryData';

export const useQueryCache = () => {
  const queryCLient = useQueryClient();

  const get = (queryKeys: query[]): any => queryCLient.getQueryData(queryKeys);

  return { get };
};
