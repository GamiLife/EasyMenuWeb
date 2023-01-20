import { useContext, useEffect, useState } from 'react';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { ThemeContext } from '../../../context/HomeContext';
import { NextImage } from '../NextImage';
import { get } from '../../../config/api';
import * as S from './styles';

export const Categories = () => {
  const { idCategory, setIdCategory, setPage, setCategoryName } =
    useContext(ThemeContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function categoriesFetch() {
      try {
        const result = await get('categories/companies/1');
        setCategories(result.data);
      } catch (e) {
        console.log(e);
      }
    }
    categoriesFetch();
  }, []);

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
