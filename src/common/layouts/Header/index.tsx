import { Avatar, Container, Input, RichText, Spacer } from '@gamiui/standard';
import classNames from 'classnames';

import { useCustomTranslation } from '../../hooks/useCustomTranslation';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useSearch } from '../../hooks/useSearch';
import { useToggle } from '../../hooks';
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
    <S.Header className={classNames('header')}>
      <S.HeaderLeft
        padding="1rem"
        className={classNames('header__title__wrapper')}
      >
        <Logo typeLogo="primary" />
      </S.HeaderLeft>
      <Container className={classNames('flex', 'items-center')}>
        <Input
          placeholder={t('header.searchText')}
          prefix={
            <S.SearchIcon name="setting" color={lightTheme.neutral[300]} />
          }
          positionPrefix="right"
          value={search}
          onChangeFormItem={handleChangeSearch}
        />
      </Container>
      <Container
        padding="1rem"
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
      </Container>
    </S.Header>
  );
};
