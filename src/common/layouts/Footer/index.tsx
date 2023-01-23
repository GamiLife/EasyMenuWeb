import * as React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import * as S from './styles';

const TestSocialNetworks = dynamic(
  () => import('../../components/AllSocialNetworks'),
  {
    ssr: false,
  }
);

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <S.Footer>
      <S.FooterSection className={classNames('flex')}>
        <S.FooterText>
          <S.FooterLogo padding="1rem">
            <Link href="/">
              <S.BrandTitle>Logo</S.BrandTitle>
            </Link>
          </S.FooterLogo>
        </S.FooterText>
        <S.FooterMenu className={classNames('flex', 'items-center')}>
          <S.Information level="h3">Información</S.Information>
          <S.LinkContainer className={classNames('flex')}>
            <S.PageLink href="/">Carta</S.PageLink>
            <S.PageLink href="/locations">Locales</S.PageLink>
            <S.PageLink href="/about">Nosotros</S.PageLink>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.FooterMenu className={classNames('flex')}>
          <S.Legal level="h3">Legal</S.Legal>
          <S.LinkContainer className={classNames('flex')}>
            <S.PageLink href="/terms-conditions">
              Términos y condiciones
            </S.PageLink>
            <S.PageLink href="/policies-privacy">
              Políticas de privacidad
            </S.PageLink>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.SocialBlock className={classNames('flex')}>
          <S.SocialFollow level="h3">Síguenos en:</S.SocialFollow>
          <TestSocialNetworks />
        </S.SocialBlock>
        <S.ScrollButtonContainer>
          <S.ScrollButton
            preffix={
              <Icon
                color={`${lightTheme.primary.white}`}
                name="arrow__right"
                size="30px"
              />
            }
          ></S.ScrollButton>
        </S.ScrollButtonContainer>
      </S.FooterSection>
      <S.RightReserved
        text={`EasyMenuWeb ${year} - Todos los derechos reservados`}
      ></S.RightReserved>
    </S.Footer>
  );
};
