import * as React from 'react';

import { IHomeProvider, defaultHomeValues, HomeContext } from './context';
import { useLocalStorage } from '../../common/hooks';

const HomeProvider = ({ children }: IHomeProvider) => {
  const [idCategory, setIdCategory] = useLocalStorage<number>(
    'categorySelectedById',
    defaultHomeValues.idCategory
  );
  const [categoryName, setCategoryName] = useLocalStorage<string>(
    'categorySelectedByName',
    defaultHomeValues.categoryName
  );

  return (
    <HomeContext.Provider
      value={{
        categoryName,
        idCategory,
        setCategoryName,
        setIdCategory,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
