import { Container } from '@gamiui/standard';
import Skeleton from 'react-loading-skeleton';

export const NewsSkeleton = () => {
  return (
    <Container width="full">
      <Skeleton count={1} height={300} />
    </Container>
  );
};
