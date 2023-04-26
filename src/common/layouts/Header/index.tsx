import React from 'react';
import { Avatar, Container, Icon, RichText, Spacer } from '@gamiui/standard';
import classNames from 'classnames';

import { useCustomTranslation } from '../../hooks/useCustomTranslation';
import { NotificationContext } from '../../../context/notification';
// import { ProductFormContext } from '../../../context/productForm';
import { CartContext } from '../../../context/cart';
import { lightTheme } from '../../../../styles/design-system/theme';
import { useSearch } from '../../hooks/useSearch';
import { useToggle } from '../../hooks';
import homeBlock from '../../blocks/home-block.json';
import { Block } from '../Block';
import { Logo } from '../../components/Logo';
import * as S from './styles';

export const Header = () => {
  // const { isTriggerValidation, setIsTriggerValidation } =
  //   React.useContext(ProductFormContext);
  const { cartProducts, isEnabledCart, setIsEnabledCart } =
    React.useContext(CartContext);
  const { isEnabledFloating, setIsEnabledFloating } =
    React.useContext(NotificationContext);

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
    <React.Fragment>
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
          <S.CartCountContainer
            onClick={() => setIsEnabledCart(!isEnabledCart)}
          >
            <S.CartCount>{cartProducts.length}</S.CartCount>
            <Block
              component={Icon}
              blockId={homeBlock.HEADER_CONTAINER}
              name="burger"
              color={lightTheme.primary.black}
              size="30px"
            />
          </S.CartCountContainer>
        </S.HeaderRight>
      </S.Header>
      <S.FloatingMessage
        direction="top"
        width="100%"
        height="63px"
        open={isEnabledFloating}
        // open={isTriggerValidation}
        zIndex={3}
        hasCloseIcon={false}
      >
        <S.SectionAlert>
          <S.AlertText>Se ha agregado a tu carrito exitosamente</S.AlertText>
          <S.AlertIcon
            name="close"
            color={`${lightTheme.primary.white}`}
            size="25px"
            onClick={() => {
              setIsEnabledFloating(false);
            }}
          />
        </S.SectionAlert>
      </S.FloatingMessage>
    </React.Fragment>
  );
};
