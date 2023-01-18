import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const ProductList = styled(Container)`
    display: grid;
    gap: 25px 30px;
    grid-template-columns: repeat(4, minmax(0, 4fr));
    padding-block: 0 15px;
`;