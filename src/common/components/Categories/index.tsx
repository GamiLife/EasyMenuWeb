import React from 'react';
import { Container } from '@gamiui/standard';

import { ConditionalRendering } from '../ConditionalRendering';
import { CompanyContext } from '../../../context/company';
import { useQueryData } from '../../hooks/useQueryData';
import { CategoryItem } from '../CategoryItem';
import { messages } from '../../constants';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
import * as S from './styles';
import { Spinner } from '../Spinner';

const { pageHome } = messages;

export const Categories = () => {
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { data, isLoading } = useQueryData(`categories/companies/${id}`, [
    'categories',
  ]);
  if (isLoading) return <Spinner isLoading={isLoading} />;
  const categories = data.data;

  return (
    <React.Fragment>
      <S.Categories
        component={Container}
        blockId={homeBlock.CATEGORIES_CONTAINER}
      >
        <Block.Tooltip blockId={homeBlock.CATEGORIES_CONTAINER} />
        <ConditionalRendering
          data={categories}
          component={<CategoryItem categories={categories} />}
          text={pageHome.categoriesNotFoundText}
        />
      </S.Categories>
    </React.Fragment>
  );
};
