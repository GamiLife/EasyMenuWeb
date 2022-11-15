import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const Categories = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: white;
  border-radius: 0.4rem;

  margin: auto;
  padding: 1rem 5px;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 7%);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
`;

export const Category = styled(Container)`
  display: grid;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
