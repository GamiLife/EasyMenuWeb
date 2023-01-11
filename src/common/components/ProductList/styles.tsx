import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const ProductList = styled(Container)`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 4fr));
    gap: 25px 30px;
    padding-block: 15px;
`;