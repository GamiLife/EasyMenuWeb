import React from 'react';
import { Empty } from '@gamiui/standard';

import { CompanyContext } from '../../../context/company';
import { useQueryData } from '../../hooks/useQueryData';
import { NewsSlider } from './NewsSlider';
import { messages } from '../../constants';

export interface INews {
  id: number;
  title: string;
  description: string;
  backgroundColor?: string;
  color?: string;
  imageUrl: string;
}

const { pageHome } = messages;

export const News = () => {
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const date = new Date();
  const toISOString = date.toISOString();

  const { data: news } = useQueryData(
    `news/companies/${id}?page=1&sizeByPage=3&byDate=2023-01-15T00:00:00Z&sort=[ "startDate", "ASC" ] , [ "id", "DESC" ]`,
    'news'
  );

  return (
    <React.Fragment>
      {!!news?.length ? (
        <NewsSlider news={news} />
      ) : (
        <Empty text={pageHome.newsNotFoundText} />
      )}
    </React.Fragment>
  );
};
