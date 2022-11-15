import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const News = styled(Container)<{
  $backgroundColor?: string;
  $backgroundImg?: string;
  $color?: string;
}>`
  background-color: darkgray;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  min-height: 60px;

  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background-image: ${({ $backgroundImg }) => `url(${$backgroundImg})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
