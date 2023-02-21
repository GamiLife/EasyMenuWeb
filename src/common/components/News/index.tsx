import { Fragment, useContext, useEffect, useState } from 'react';

import { CompanyContext } from '../../../context/company';
import { NewsSlider } from './NewsSlider';
import { get } from '../../../config/api';

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
  const {
    company: { id },
  } = useContext(CompanyContext);

  const date = new Date();
  const toISOString = date.toISOString();

  useEffect(() => {
    if (!id) return;
    async function newsFetch() {
      try {
        const { data } = await get(
          `news/companies/${id}?page=1&sizeByPage=3&byDate=2023-01-15T00:00:00Z&sort=[ "startDate", "ASC" ] , [ "id", "DESC" ]`
        );
        setNews(data);
      } catch (e) {
        console.log(e);
      }
    }
    newsFetch();
  }, [id]);

  return <Fragment>{!!news?.length && <NewsSlider news={news} />}</Fragment>;
};
