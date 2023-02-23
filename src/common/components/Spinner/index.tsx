import { Container, Loader } from '@gamiui/standard';
import classNames from 'classnames';

import { lightTheme } from '../../../../styles/design-system';
import * as S from './styles';

export interface ISpinner {
  isLoading: boolean;
}

export const Spinner = ({ isLoading }: ISpinner) => {
  return (
    <Container>
      {isLoading && (
        <S.LoaderWrapper
          minHeight="800px"
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
