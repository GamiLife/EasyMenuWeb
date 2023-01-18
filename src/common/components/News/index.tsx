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
}

export const News = () => {
  const [news, setNews] = useState<INews[] | undefined>(undefined);
  const date = new Date();
  const toISOString = date.toISOString();
  
  useEffect(() => {
    async function newsFetch() {
      try{
        // const { data } = await get(`news/companies/1?page=1&sizeByPage=3&byDate=${toISOString}&sort=[ "startDate", "ASC" ] , [ "id", "DESC" ]`);
        const { data } = await get(`news/companies/1?page=1&sizeByPage=3&byDate=2023-01-15T00:00:00Z&sort=[ "startDate", "ASC" ] , [ "id", "DESC" ]`);
        setNews(data);
      }catch(e){
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