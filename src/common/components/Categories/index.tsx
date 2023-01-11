import { useContext, useEffect, useState } from 'react';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { ThemeContext } from '../../../context/ThemeContext';
import { get } from '../../../config/api';
import * as S from './styles';

export const Categories = () => {
  const { idCategory, setIdCategory, setPage, setCategoryName } = useContext(ThemeContext);
  const [categories, setCategories] = useState([]);

  const icon = 'share' as const;

  useEffect(() => {
    async function categoriesFetch(){
      try{
        const result = await get('categories');
        setCategories(result.data);
      }catch(e){
        console.log(e);
      }
    }
    categoriesFetch();
  }, [])
  
  return (
    <S.Categories>
      {categories.map(({ id, title }) => (
        <S.Category 
          key={id}
          onClick={() => {
            setPage(0);
            setIdCategory(id);
            setCategoryName(title);
          }}
        >
          <Icon 
            name={icon}
            color={id === idCategory ? lightTheme.extended.oceanStrong : lightTheme.primary.jordyBlue}
          />
          <S.CategoryTitle 
            text={title} 
            color={id === idCategory ? lightTheme.extended.oceanStrong : ''}
          />
        </S.Category>
      ))}
    </S.Categories>
  );
};