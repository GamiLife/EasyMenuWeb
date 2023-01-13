import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const News = styled.div`
  margin: 1rem 0;
  flex: 1;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-height: 60px;
  padding: 1rem;

  display: flex; 
  align-items: center; 
  justify-content: center;  
  color: #8a8cff;
  height: 100px!important; 
`;