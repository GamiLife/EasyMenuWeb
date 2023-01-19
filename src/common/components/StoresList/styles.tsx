import styled from '@emotion/styled';
import { Card, Container, Icon, RichText, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { tokens } from '../../../../styles/design-system/token';

export const StoresList = styled(Container)`
    border-top: 1px solid ${lightTheme.neutral[200]};
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(2, minmax(0,1fr));
    margin-top: 0;
    padding-block: 25px 50px;
`;

export const StoreItem = styled(Card)``;

export const StoreItemTitle = styled(Title)`
    font-size: 18px;
    text-transform: uppercase;
`;

export const PhoneAddressContainer = styled(Container)`
    color: ${lightTheme.primary.black};
    font-size: ${tokens.font.size.base};
`;

export const PhoneContainer = styled(Container)`
    column-gap: 3px;
`;

export const PhoneIcon = styled(Icon)`
    filter: invert(15%) sepia(110%) saturate(4773%) hue-rotate(339deg) brightness(90%) contrast(113%);
`;

export const PhoneHeader = styled(Title)`
    color: ${lightTheme.primary.black};
`;

export const Phone = styled(RichText)``;