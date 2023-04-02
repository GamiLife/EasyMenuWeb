import { useQuery } from '@tanstack/react-query';

import { get } from '../../config/api';

export type query = string | number;

export interface IUseQueryData {
  path: string;
  queryKey: query[];
  select?: (data: any) => any;
  enabled?: boolean;
}

export const useQueryData = ({
  path,
  queryKey,
  select,
  enabled = true,
}: IUseQueryData) => {
  const getData = async () => {
    const result = await get(path);
    return result;
  };

  const { data, isError, isLoading, isFetched, refetch } = useQuery({
    queryKey,
    queryFn: getData,
    select,
    enabled,
  });

  return { data, isError, isLoading, isFetched, refetch };
};
