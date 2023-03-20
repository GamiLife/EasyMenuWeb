import React from 'react';
import { IconNames } from '@gamiui/standard/lib/types/core/domain/types';
import { Container, Icon } from '@gamiui/standard';

import { HomeContext, PaginationContext } from '../../../context';
import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
import * as S from './styles';

interface ICategoryitem {
  categories: [];
}

interface ICategories {
  id: number;
  title: string;
  iconId: IconNames;
  imageCategory: string;
}

export const CategoryItem = ({ categories }: ICategoryitem) => {
  const { idCategory, setIdCategory, setCategoryName } =
    React.useContext(HomeContext);
  const { setPage } = React.useContext(PaginationContext);

  return (
    <React.Fragment>
      {categories?.map(({ id, title, iconId, imageCategory }: ICategories) => (
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
                  id === idCategory ? lightTheme.extended.oceanStrong : color,
              })}
            />
          )}
          <S.CategoryTitle
            text={title}
            color={id === idCategory ? lightTheme.extended.oceanStrong : ''}
          />
        </S.Category>
      ))}
    </React.Fragment>
  );
};
