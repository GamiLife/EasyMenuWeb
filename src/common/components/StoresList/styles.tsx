import styled from '@emotion/styled';
import { Card, Container, Icon, RichText, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

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
    text-transform: uppercase;
`;

export const PhoneIcon = styled(Icon)`
    color: ${lightTheme.semantic.danger};
    color: red;
`;

export const PhoneHeader = styled(Title)``;

export const Phone = styled(RichText)``;