import styled from '@emotion/styled';
import { Container, RichText } from '@gamiui/standard';

export const Categories = styled(Container)`
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.35);
  border-radius: 0.4rem;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 7%);
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: auto;
  padding: 1rem 5px;
  -webkit-backdrop-filter: blur(4px);
`;

export const Category = styled(Container)`
  display: grid;
  gap: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const CategoryTitle = styled(RichText)<{color?: string}>`
  color: ${({color}) => color}
`;
