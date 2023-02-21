import { useContext } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { Icon } from '@gamiui/standard';

import { useCustomTranslation } from '../../hooks/useCustomTranslation';
import { CompanyContext } from '../../../context/company';
import { lightTheme } from '../../../../styles/design-system/theme';
import { Logo } from '../../components/Logo';
import * as S from './styles';

const TestSocialNetworks = dynamic(
  () => import('../../components/AllSocialNetworks'),
  {
    ssr: false,
  }
);

export const Footer = () => {
  const { t } = useCustomTranslation();

  const { staticPages } = useContext(CompanyContext);

  const termsConditions = staticPages[0]?.url ?? '/';
  const privacyPolicies = staticPages[1]?.url ?? '/';
  const about = staticPages[2]?.url ?? '/';

  const router = useRouter();
  const { slugCompany } = router.query;

  const date = new Date();
  const year = date.getFullYear();

  function handleScrollUp() {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(handleScrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 5);
      // window.scrollTo(0, 0);
    }
  }

  return (
    <S.Footer>
      <S.FooterSection className={classNames('flex')}>
        <S.FooterText>
          <S.FooterLogoContainer padding="1rem">
            <Logo typeLogo="footer" />
          </S.FooterLogoContainer>
        </S.FooterText>
        <S.FooterMenu className={classNames('flex', 'items-center')}>
          <S.Information level="h3">
            {t('footer.informationSection.title')}
          </S.Information>
          <S.LinkContainer className={classNames('flex')}>
            <S.PageLink href={`/${slugCompany}`}>
              {t('footer.informationSection.letter')}
            </S.PageLink>
            <S.PageLink href={`/${slugCompany}/locations`}>
              {t('footer.informationSection.local')}
            </S.PageLink>
            <S.PageLink href={`/${slugCompany}${about}`}>
              {t('footer.informationSection.about')}
            </S.PageLink>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.FooterMenu className={classNames('flex')}>
          <S.Legal level="h3">{t('footer.legalSection.title')}</S.Legal>
          <S.LinkContainer className={classNames('flex')}>
            <S.PageLink href={`/${slugCompany}${termsConditions}`}>
              {t('footer.legalSection.termsConditions')}
            </S.PageLink>
            <S.PageLink href={`/${slugCompany}${privacyPolicies}`}>
              {t('footer.legalSection.privacyPolicies')}
            </S.PageLink>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.SocialBlock className={classNames('flex')}>
          <S.SocialFollow level="h3">{t('footer.followTitle')}</S.SocialFollow>
          <TestSocialNetworks />
        </S.SocialBlock>
        <S.ScrollButtonContainer onClick={handleScrollUp}>
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
        text={t('footer.copyright', {
          val: year,
        })}
      ></S.RightReserved>
    </S.Footer>
  );
};
