import { useQueryData } from './useQueryData';

export const useFetchStaticPages = (id: number) => {
  const { data } = useQueryData({
    path: `static-pages/${id}`,
    queryKey: ['staticPages', id],
  });

  return {
    data,
  };
};
