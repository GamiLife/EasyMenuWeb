import { useContext, useEffect, useState } from 'react';
import { Container, Icon } from '@gamiui/standard';

import { PaginationContext } from '../../../context/pagination';
import { CompanyContext } from '../../../context/company';
import { HomeContext } from '../../../context/home';
import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../NextImage';
import { get } from '../../../config/api';
import * as S from './styles';
import { Block } from '../../layouts';

import homeBlock from '../../blocks/home-block.json';

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
    <S.Categories>
      {categories?.map(({ id, title, iconId, imageCategory }) => (
        // <Block key={id} component={Container} blockId={homeBlock.CATEGORY_ITEM}>
        <S.Category
          className={id === idCategory ? 'active' : ''}
          key={id}
          onClick={() => {
            setPage(0);
            setIdCategory(id);
            setCategoryName(title);
          }}
        >
          {imageCategory ? (
            <NextImage imageUrl={imageCategory} alt={title} height="50px" />
          ) : (
            <Icon
              name={iconId}
              color={
                id === idCategory ? lightTheme.extended.oceanStrong : 'black'
              }
              size="50px"
            />
          )}
          <S.CategoryTitle
            text={title}
            color={id === idCategory ? lightTheme.extended.oceanStrong : ''}
          />
        </S.Category>
        // </Block>
      ))}
    </S.Categories>
  );
};
