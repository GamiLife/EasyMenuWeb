import { useQuery } from '@tanstack/react-query';

import { get } from '../../config/api';

export const useQueryData = (path: string, queryKey: string) => {
  const getData = async () => {
    const { data } = await get(path);
    return data;
  };

  const { data, isError } = useQuery({
    queryKey: [queryKey],
    queryFn: getData,
  });

  return { data, isError };
};
