import { useQuery } from '@tanstack/react-query';

import { get } from '../../config/api';

type query = string | number;

export const useQueryData = (
  path: string,
  queryKey: query[],
  select?: (data: any) => any
) => {
  const getData = async () => {
    const { data } = await get(path);
    return data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey,
    queryFn: getData,
    select,
  });

  return { data, isError, isLoading };
};
