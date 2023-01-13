import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';
import { lightTheme } from '../../../../styles/design-system/theme';

export const News = styled.div`
  margin: 1rem 0;
`;

export const KeenSliderSlide = styled(Container)<{
  $backgroundColor?: string;
  $backgroundImg?: string;
  $color?: string;
}>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background-image: ${({ $backgroundImg }) => `url(${$backgroundImg})`};
  /* background-image: ''; */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: ${({ $color }) => $color};
  color: ${lightTheme.primary.first};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100px!important; 
  justify-content: center;
  min-height: 60px;
  padding: 1rem;
`;