import React, { Fragment, useEffect, useState } from 'react';

import { get } from '../../../config/api';
import { NewsSlider } from './NewsSlider';

export interface INews {
  id: number;
  title: string;
  description: string;
  backgroundColor?: string;
  color?: string;
  imageUrl: string;
  // backgroundImg?: string;
}

export const News = () => {
  const [news, setNews] = useState<INews[] | undefined>(undefined);

  useEffect(() => {
    async function newsFetch() {
      try {
        const { data } = await get(`news?startDate=2023-01-03&companyId=1`);
        // console.log(data); 
        setNews(data);
      } catch (e) {
        console.log(e);
      }
    }
    newsFetch();
  }, []);

  return (
    <Fragment>
      {!!news?.length && <NewsSlider news={news} />}
    </Fragment>
  );
};
