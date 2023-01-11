import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../styles/design-system/theme';

export const ErrorPage = styled(Container)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    min-height: calc(100vh - 100px);
    padding: 2rem;
    row-gap: 4rem;
    width: 740px;
`;

export const ContentError = styled(Container)`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const ErrorTitle = styled(Title)`
    text-transform: uppercase;
`;

export const ErrorImagen = styled(Title)`
    color: ${lightTheme.semantic.danger};
    font-size: 6rem;
    text-transform: uppercase;
`;

export const BackLink = styled(Link)`
    background: ${lightTheme.semantic.danger};
    border-radius: 25px;
    color: ${lightTheme.primary.white};
    max-width: 100%;
    padding: 14px 20px 14px;
    text-align: center;
    text-transform: uppercase;
    width: 200px;
`;