import { Container, Row, Spacer } from '@gamiui/standard';
import Skeleton from 'react-loading-skeleton';

const ProductItem = () => (
  <Container
    rounded="md"
    style={{ width: 250, height: 470, background: 'white', overflow: 'hidden' }}
  >
    <Skeleton count={1} height={250} />
    <Spacer direction="bottom" customSize="10px" />
    <Container margin="0 8px">
      <Skeleton count={1} height={20} />
      <Spacer direction="bottom" customSize="10px" />
      <Skeleton count={1} height={55} />
      <Spacer direction="bottom" customSize="10px" />
      <Skeleton count={1} height={35} />
      <Spacer direction="bottom" customSize="10px" />
      <Skeleton count={1} height={40} />
    </Container>
  </Container>
);

export const ProductListSkeleton = () => {
  return (
    <Row height="full" gap="20px" isWrap style={{ margin: '1rem 0' }}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Row>
  );
};
