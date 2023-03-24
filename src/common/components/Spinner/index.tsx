import { Container, Loader } from '@gamiui/standard';
import classNames from 'classnames';

import { lightTheme } from '../../../../styles/design-system';
import * as S from './styles';
import { HeaderRight } from '../../layouts/Header/styles';

export interface ISpinner {
  isLoading: boolean;
  minHeight?: string;
}

export const Spinner = ({ isLoading, minHeight = 'auto' }: ISpinner) => {
  return (
    <Container>
      {isLoading && (
        <S.LoaderWrapper
          // minHeight="800px"
          minHeight={minHeight}
          isLoading={isLoading}
          loaderNode={
            <Loader
              type="spinner"
              background={`${lightTheme.primary.first}`}
            ></Loader>
          }
          className={classNames('flex', 'items-center')}
        >
          {''}
        </S.LoaderWrapper>
      )}
    </Container>
  );
};
