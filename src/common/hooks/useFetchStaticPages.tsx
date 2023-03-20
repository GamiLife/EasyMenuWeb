import { useEffect, useState } from 'react';

import { get } from '../../config/api';
import { useQueryData } from './useQueryData';

export const useFetchStaticPages = (id: number) => {
  // const [htmlContent, setHtmlContent] = useState('');

  // useEffect(() => {
  //   if (!id) return;

  //   async function staticPagesFetch() {
  //     try {
  //       const {
  //         data: { htmlContent },
  //       } = await get(`static-pages/${id}`);
  //       setHtmlContent(htmlContent);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   staticPagesFetch();
  // }, [id]);

  const { data } = useQueryData(`static-pages/${id}`, 'static-pages');

  return {
    data,
  };
};
