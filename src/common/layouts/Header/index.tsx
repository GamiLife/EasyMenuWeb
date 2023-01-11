import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Avatar, Container, Icon, Input, RichText, Spacer } from '@gamiui/standard';

import { ThemeContext } from '../../../context/ThemeContext';
import { lightTheme } from '../../../../styles/design-system/theme';
import * as S from './styles';

export const Header = () => {

  const { value, setValue } = React.useContext(ThemeContext);

  const handleChange = (newValue: string) => setValue(newValue);

  return (
    <S.Header className={classNames('header')}>
      <S.HeaderLeft padding='1rem' className={classNames('header__title__wrapper')}>
        <Link href='/'>
          <S.TitleBrand className={classNames('header__title')} level='h2'>Logo</S.TitleBrand>
        </Link>
      </S.HeaderLeft>
      <Container className={classNames('flex', 'items-center')}>
        <Input
          placeholder='Search you are thinking...'
          prefix={<Icon name='setting' color={lightTheme.neutral[300]} />}
          positionPrefix='right'
          value={value}
          onChangeFormItem={handleChange}
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
        <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png' />
        <Spacer customSize='8px' direction='right' />
        <RichText text='EN' />
      </Container>
    </S.Header>
  );
};