import {
  Avatar,
  Container,
  Icon,
  Input,
  RichText,
  Spacer,
} from '@gamiui/standard';
import * as React from 'react';
import * as S from './styles';

import classNames from 'classnames';
import { lightTheme } from '../../../../styles/design-system/theme';

export const Header = () => {
  return (
    <S.Header
      padding='1rem'
      className={classNames('header', 'flex', 'justify-between')}
    >
      <S.HeaderLeft
        padding='1rem'
        className={classNames('header__title__wrapper', 'flex', 'items-center')}
      >
        <S.TitleBrand className={classNames('header__title')} level='h2'>
          Logo
        </S.TitleBrand>
      </S.HeaderLeft>
      <Container className={classNames('flex', 'items-center')}>
        <Input
          placeholder='Search you are thinking...'
          prefix={<Icon name='setting' color={lightTheme.neutral[300]} />}
          positionPrefix='right'
        />
      </Container>
      <Container
        padding='1rem'
        className={classNames(
          'header__menu',
          'flex',
          'justify-end',
          'items-center'
        )}
      >
        <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png' />
        <Spacer customSize='8px' direction='right' />
        <RichText text='ES' />
      </Container>
    </S.Header>
  );
};
