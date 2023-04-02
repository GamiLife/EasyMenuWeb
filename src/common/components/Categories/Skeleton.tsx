import { Row, Container, Spacer } from '@gamiui/standard';
import Skeleton from 'react-loading-skeleton';

const CategoryItemSkelton = () => (
  <Container>
    <Skeleton width={140} count={1} height={70} />
    <Spacer direction="bottom" customSize="5px" />
    <Skeleton width={140} count={1} height={15} />
  </Container>
);

export const CategoriesSkeleton = () => {
  return (
    <Row height="full" gap="20px">
      <CategoryItemSkelton />
      <CategoryItemSkelton />
      <CategoryItemSkelton />
      <CategoryItemSkelton />
      <CategoryItemSkelton />
      <CategoryItemSkelton />
    </Row>
  );
};
