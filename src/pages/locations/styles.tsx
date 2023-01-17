import styled from '@emotion/styled';
import { Card, Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../styles/design-system/theme';

export const ContentWrapper = styled(Container)`
    height: 100%;
    max-width: 100%;
    /* padding-inline: 100px; */

    margin: 0 auto;
    max-width: 980px;
    /* padding: 40px 15px 78px 15px; */
    width: 100%;

    border: 1px solid red;
`;

export const TitleContainer = styled(Container)`
    padding-bottom: 35px;
    padding-top: 50px;
    text-align: center;
`;

export const LocationsTitle = styled(Title)`
    font-size: 22px;
    margin-bottom: 25px;
    text-transform: uppercase;
`;

export const StoresContainer = styled(Container)`

`;

export const StoresList = styled(Container)`
    border-top: 1px solid ${lightTheme.neutral[100]};
    display: grid;

    grid-template-columns: repeat(2, minmax(0,1fr));
    grid-column-gap: 25px;
    column-gap: 25px;
    grid-row-gap: 25px;
    row-gap: 25px;
    padding-top: 25px;
    padding-bottom: 50px;
    margin-top: 0;
`;

export const StoreItem = styled(Card)`
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    border: 1px solid #ccc;
`;

export const StoreItemTitle = styled(Title)`
    
`;