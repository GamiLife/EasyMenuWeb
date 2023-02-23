import React from 'react';

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
  const [news, setNews] = React.useState<INews[] | undefined>(undefined);
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const date = new Date();
  const toISOString = date.toISOString();

  React.useEffect(() => {
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

  return (
    <React.Fragment>
      {!!news?.length && <NewsSlider news={news} />}
    </React.Fragment>
  );
};
