import styled from '@emotion/styled';
import { Card, Container, Icon, RichText, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const StoresList = styled(Container)`
    border-top: 1px solid ${lightTheme.neutral[200]};
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(2, minmax(0,1fr));
    margin-top: 0;
    padding-block: 25px 50px;
`;

export const StoreItem = styled(Card)`
    background-color: ${lightTheme.primary.white};
    border-radius: 15px;
    padding: 20px;
    border: 1px solid #ccc;
`;

export const StoreItemTitle = styled(Title)`
    margin-bottom: 0;
    text-transform: uppercase;
`;

export const PhoneIcon = styled(Icon)`
    color: ${lightTheme.semantic.danger};
    color: red;
`;

export const PhoneHeader = styled(Title)``;

export const Phone = styled(RichText)``;