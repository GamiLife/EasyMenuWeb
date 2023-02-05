import { useContext, useEffect, useState } from 'react';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { HomeContext } from '../../../context/HomeContext';
import { CompanyContext, PaginationContext } from '../../../context';
import { NextImage } from '../NextImage';
import { get } from '../../../config/api';
import * as S from './styles';

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
      {categories.map(({ id, title, iconId, imageCategory }) => (
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
      ))}
    </S.Categories>
  );
};
