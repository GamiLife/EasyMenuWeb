import { Fragment } from 'react';
import classNames from 'classnames';
import { Loader, Title } from '@gamiui/standard';

import * as S from './styles';

export interface IEasyLoader {
  children: React.ReactNode;
  isLoading: boolean;
}

export const EasyLoader = ({ children, isLoading }: IEasyLoader) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
