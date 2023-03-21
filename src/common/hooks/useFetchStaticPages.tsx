import { useQueryData } from './useQueryData';

export const useFetchStaticPages = (id: number) => {
  const { data } = useQueryData(`static-pages/${id}`, ['staticPages', id]);

  return {
    data,
  };
};
