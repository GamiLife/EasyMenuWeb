import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const NextImage = styled(Container)<{
    $height: string;
}>`
    height: ${({$height}) => $height}  ;
    position: relative;
    width: 100%;
`;