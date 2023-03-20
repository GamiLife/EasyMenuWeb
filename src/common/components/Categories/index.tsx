import React from 'react';
import { Container, Empty, Icon } from '@gamiui/standard';

import { PaginationContext } from '../../../context/pagination';
import { CompanyContext } from '../../../context/company';
import { useQueryData } from '../../hooks/useQueryData';
import { HomeContext } from '../../../context/home';
import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { messages } from '../../constants';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
import * as S from './styles';

interface ICategories {
  id: number;
  title: string;
  iconId: string;
  imageCategory: string;
}

const { pageHome } = messages;

export const Categories = () => {
  const { idCategory, setIdCategory, setCategoryName } =
    React.useContext(HomeContext);
  const { setPage } = React.useContext(PaginationContext);
  const {
    company: { id },
  } = React.useContext(CompanyContext);

  const { data: categories } = useQueryData(
    `categories/companies/${id}`,
    'categories'
  );

  return (
    <React.Fragment>
      {!!categories?.length ? (
        <S.Categories
          component={Container}
          blockId={homeBlock.CATEGORIES_CONTAINER}
        >
          <Block.Tooltip blockId={homeBlock.CATEGORIES_CONTAINER} />
          {categories?.map(
            ({ id, title, iconId, imageCategory }: ICategories) => (
              <S.Category
                component={Container}
                blockId={homeBlock.CATEGORY_ITEM}
                className={id === idCategory ? 'active' : ''}
                key={id}
                onClick={() => {
                  setPage(0);
                  setIdCategory(id);
                  setCategoryName(title);
                }}
              >
                <Block.Tooltip blockId={homeBlock.CATEGORY_ITEM} />
                {imageCategory ? (
                  <NextImage
                    id={id}
                    imageUrl={imageCategory}
                    alt={title}
                    height="50px"
                  />
                ) : (
                  <Block
                    allowBorder={false}
                    component={Icon}
                    blockId={homeBlock.CATEGORY_ITEM}
                    name={iconId}
                    color={
                      id === idCategory
                        ? lightTheme.extended.oceanStrong
                        : lightTheme.primary.black
                    }
                    size="50px"
                    getCustomProps={({ color }) => ({
                      color:
                        id === idCategory
                          ? lightTheme.extended.oceanStrong
                          : color,
                    })}
                  />
                )}
                <S.CategoryTitle
                  text={title}
                  color={
                    id === idCategory ? lightTheme.extended.oceanStrong : ''
                  }
                />
              </S.Category>
            )
          )}
        </S.Categories>
      ) : (
        <Empty text={pageHome.categoriesNotFoundText} />
      )}
    </React.Fragment>
  );
};
