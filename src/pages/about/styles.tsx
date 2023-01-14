import styled from '@emotion/styled';
import { Container, RichText } from '@gamiui/standard';

export const ContentWrapper = styled(Container)`
    height: 100%;
    line-height: 1.8;
    margin: 0 auto;
    max-width: 980px;
    padding: 40px 15px 78px 15px;
    width: 100%;
`;

export const RichTextTitle = styled(RichText)`
    margin-bottom: 1rem;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
`;