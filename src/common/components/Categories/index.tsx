import { useContext, useEffect, useState } from 'react';
import { Container, Icon } from '@gamiui/standard';

import { PaginationContext } from '../../../context/pagination';
import { CompanyContext } from '../../../context/company';
import { HomeContext } from '../../../context/home';
import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../../layouts';
import * as S from './styles';
import { get } from '../../../config/api';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { idCategory, setIdCategory, setCategoryName } =
    useContext(HomeContext);
  const { setPage } = useContext(PaginationContext);
  const {
    company: { id },
  } = useContext(CompanyContext);

  useEffect(() => {
    if (!id) return;
    async function categoriesFetch() {
      try {
        const { data } = await get(`categories/companies/${id}`);
        setCategories(data);
      } catch (e) {
        console.log(e);
      }
    }
    categoriesFetch();
  }, [id]);

  return (
    <S.Categories
      component={Container}
      blockId={homeBlock.CATEGORIES_CONTAINER}
    >
      <Block.Tooltip blockId={homeBlock.CATEGORIES_CONTAINER} />
      {categories?.map(({ id, title, iconId, imageCategory }) => (
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
                id === idCategory ? lightTheme.extended.oceanStrong : 'black'
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
    </S.Categories>
  );
};
