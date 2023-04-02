import React, { Fragment } from 'react';

import { ConditionalRendering } from '../ConditionalRendering';
import { CompanyContext } from '../../../context/company';
import { useQueryData } from '../../hooks/useQueryData';
import { NewsSlider } from './NewsSlider';
import { messages } from '../../constants';
import { NewsSkeleton } from './NewsSkeleton';

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

  const { data, isLoading } = useQueryData({
    path: `news/companies/${id}?page=1&sizeByPage=3&byDate=2023-01-15T00:00:00Z&sort=[ "startDate", "ASC" ] , [ "id", "DESC" ]`,
    queryKey: ['news'],
  });

  return (
    <Fragment>
      {isLoading ? (
        <NewsSkeleton />
      ) : (
        <ConditionalRendering
          data={data.data}
          component={<NewsSlider news={data.data} />}
          text={pageHome.newsNotFoundText}
        />
      )}
    </Fragment>
  );
};
