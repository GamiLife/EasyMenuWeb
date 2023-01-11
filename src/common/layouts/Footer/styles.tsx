import styled from '@emotion/styled';
import { Button, Container, Icon, RichText, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const Footer = styled(Container)`
    background-color: ${lightTheme.primary.first};
    color: ${lightTheme.primary.white};
    margin: auto;
    max-width: 100%;
    padding-inline: 100px;
    width: 1472px;
`;

export const FooterSection = styled(Container)``;

export const FooterText = styled(Container)`
    padding: 3rem 1.5rem;
    width: 27%;
`;

export const FooterLogo = styled(Container)``;

export const BrandTitle = styled(Container)`
    color: ${lightTheme.primary.white};
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
`;

export const FooterMenu = styled(Container)`
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    flex-direction: column;
    min-width: 300px;
    padding: 3rem 1.5rem;
    row-gap: 1.5rem;
`;

export const Information = styled(Title)`
    text-transform: uppercase;
    width: 100%;
`;

export const LinkContainer = styled(Container)`
    flex-direction: column;
    font-size: 14px;
    row-gap: 0.5rem;
    width: 100%;
`;

export const Legal = styled(Title)`
    text-transform: uppercase;
`;

export const SocialBlock = styled(Container)`
    flex-direction: column;
    padding: 3rem 1.5rem;
    row-gap: 1.5rem;
`;

export const SocialFollow = styled(Title)`
    text-transform: uppercase;
`;

export const SocialMedia = styled(Container)`
    column-gap: 1rem;
`;

export const SocialMediaIcon = styled(Icon)`
    border: 1px solid ${lightTheme.primary.white};
    border-radius: 50%;
    padding: 0.3rem;
`;

export const ScrollButtonContainer = styled(Container)`
    position: absolute;
    right: 4%;
    top: 3%;
`;

export const ScrollButton= styled(Button)`
    background-color: ${lightTheme.primary.mediumPurple};
    box-shadow: none;
    display: inline-block;
    padding: 1px 6px;
`;

export const RightReserved = styled(RichText)`
    color: ${lightTheme.primary.white};
    font-size: 13px;
    opacity: .4;
    padding: 14px;
    text-align: center;
`;