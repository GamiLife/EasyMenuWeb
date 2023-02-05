import { useEffect, useState } from 'react';

import { get } from '../../config/api';

export const useFetchStaticPages = (id: number) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (!id) return;

    async function staticPagesFetch() {
      try {
        const {
          data: { htmlContent },
        } = await get(`static-pages/${id}`);
        setHtmlContent(htmlContent);
      } catch (e) {
        console.log(e);
      }
    }
    staticPagesFetch();
  }, [id]);
  return {
    htmlContent,
  };
};
