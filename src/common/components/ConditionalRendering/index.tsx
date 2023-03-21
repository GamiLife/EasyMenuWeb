import React from 'react';
import { Empty } from '@gamiui/standard';

interface IConditionalRendering {
  data: [];
  component: React.ReactNode;
  text: string;
}

export const ConditionalRendering = ({
  data,
  component,
  text,
}: IConditionalRendering) => {
  return (
    <React.Fragment>
      {data?.length ? component : <Empty text={text} />}
    </React.Fragment>
  );
};
