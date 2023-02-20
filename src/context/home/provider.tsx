import * as React from 'react';
import { useLocalStorage } from '../../common/hooks';
import { IHomeProvider, defaultHomeValues, HomeContext } from './context';

const HomeProvider = ({ children }: IHomeProvider) => {
  const [idCategory, setIdCategory] = useLocalStorage<number>(
    'categorySelectedId',
    defaultHomeValues.idCategory
  );
  const [categoryName, setCategoryName] = React.useState(
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
