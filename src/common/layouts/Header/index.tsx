import { Avatar, Container, RichText, Spacer } from '@gamiui/standard';
import classNames from 'classnames';

import { useCustomTranslation } from '../../hooks/useCustomTranslation';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useSearch } from '../../hooks/useSearch';
import { useToggle } from '../../hooks';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../Block';
import { Logo } from '../../components/Logo';
import * as S from './styles';

export const Header = () => {
  const { i18n, t } = useCustomTranslation();
  const { search, handleChangeSearch } = useSearch();
  const { isVisible: changeLanguage, handleToggle: setChangeLanguage } =
    useToggle({
      defaultVisible: false,
    });

  function handleChangeLanguage(ln: string) {
    i18n.changeLanguage(ln);
    setChangeLanguage(!changeLanguage);
  }

  return (
    <S.Header
      component={Container}
      className={classNames('header')}
      blockId={homeBlock.HEADER_CONTAINER}
    >
      <Block.Tooltip blockId={homeBlock.HEADER_CONTAINER} />
      <S.HeaderLeft
        padding="1rem"
        className={classNames('header__title__wrapper')}
      >
        <Block
          component={Logo}
          blockId={homeBlock.HEADER_CONTAINER}
          allowBorder={false}
          typeLogo="primary"
        />
      </S.HeaderLeft>
      <Container className={classNames('flex', 'items-center')}>
        <S.SearchInput
          rounded="lg"
          placeholder={t('header.searchText')}
          prefix={
            <S.SearchIcon name="setting" color={lightTheme.neutral[300]} />
          }
          positionPrefix="right"
          value={search}
          onChangeFormItem={handleChangeSearch}
        />
      </Container>
      <S.HeaderRight>
        <S.LanguageSwitch
          className={classNames(
            'header__menu',
            'flex',
            'justify-end',
            'items-center'
          )}
          onClick={
            changeLanguage
              ? () => handleChangeLanguage('es')
              : () => handleChangeLanguage('en')
          }
        >
          <Avatar
            src={
              changeLanguage
                ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png'
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
            }
          />
          <Spacer customSize="8px" direction="right" />
          <RichText text={changeLanguage ? 'ES' : 'IN'} />
        </S.LanguageSwitch>
        <S.CartCountContainer>
          <S.CartCount>0</S.CartCount>
          <Block
            component={Avatar}
            blockId={homeBlock.HEADER_CONTAINER}
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Antu_amarok_cart_add.svg"
          />
        </S.CartCountContainer>
      </S.HeaderRight>
    </S.Header>
  );
};
