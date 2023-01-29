import { useContext } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { Icon } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { NextImage } from '../../components/NextImage';
import { CompanyContext } from '../../../context';
import * as S from './styles';

const TestSocialNetworks = dynamic(
  () => import('../../components/AllSocialNetworks'),
  {
    ssr: false,
  }
);

export const Footer = () => {
  const { logos, staticPages } = useContext(CompanyContext);

  const termsConditions = staticPages[0]?.url;
  const policiesPrivacy = staticPages[1]?.url;
  const about = staticPages[2]?.url;

  const logo = logos.find(({ type }) => type === 'footer');
  if (!logo) return;
  const { alt, src } = logo;

  const date = new Date();
  const year = date.getFullYear();

  function scrollUp() {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 5);
      // window.scrollTo(0, 0);
    }
  }

  return (
    <S.Footer>
      <S.FooterSection className={classNames('flex')}>
        <S.FooterText>
          <S.FooterLogo padding="1rem">
            <Link href="/">
              <NextImage alt={alt} imageUrl={src} height="20px" />
            </Link>
          </S.FooterLogo>
        </S.FooterText>
        <S.FooterMenu className={classNames('flex', 'items-center')}>
          <S.Information level="h3">Información</S.Information>
          <S.LinkContainer className={classNames('flex')}>
            <S.PageLink href="/">Carta</S.PageLink>
            <S.PageLink href="/locations">Locales</S.PageLink>
            <S.PageLink href={about}>Nosotros</S.PageLink>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.FooterMenu className={classNames('flex')}>
          <S.Legal level="h3">Legal</S.Legal>
          <S.LinkContainer className={classNames('flex')}>
            <S.PageLink href={termsConditions}>
              Términos y condiciones
            </S.PageLink>
            <S.PageLink href={policiesPrivacy}>
              Políticas de privacidad
            </S.PageLink>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.SocialBlock className={classNames('flex')}>
          <S.SocialFollow level="h3">Síguenos en:</S.SocialFollow>
          <TestSocialNetworks />
        </S.SocialBlock>
        <S.ScrollButtonContainer onClick={scrollUp}>
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
