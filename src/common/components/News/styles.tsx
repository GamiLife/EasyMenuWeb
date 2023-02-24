import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const News = styled.div``;

export const KeenSliderSlide = styled(Container)<{
  $backgroundColor?: string;
  $backgroundImg?: string;
  $color?: string;
}>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background-image: ${({ $backgroundImg }) =>
    $backgroundImg && `url(${$backgroundImg})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: ${lightTheme.primary.first};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100px !important;
  justify-content: center;
  min-height: 60px;
  padding: 1rem;
`;
