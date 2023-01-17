import styled from '@emotion/styled';
import { Card, Container, RichText, Title } from '@gamiui/standard';

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

export const StoresContainer = styled(Container)``;