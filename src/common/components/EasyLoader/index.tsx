import React from 'react';
import { Loader, Title } from '@gamiui/standard';
import classNames from 'classnames';

import * as S from './styles';

export interface IEasyLoader {
  children: React.ReactNode;
  isLoading: boolean;
}

export const EasyLoader = ({ children, isLoading }: IEasyLoader) => {
  return (
    <React.Fragment>
      <S.EasyLoader
        className={classNames({
          hide: !isLoading,
        })}
      >
        <S.ContentLoader>
          <Title>EasyMenu CMS</Title>
          <Loader type="points" />
        </S.ContentLoader>
      </S.EasyLoader>

      {children}
    </React.Fragment>
  );
};
