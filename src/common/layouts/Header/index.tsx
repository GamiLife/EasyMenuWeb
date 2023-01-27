import { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Avatar, Container, Input, RichText, Spacer } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';
import { useSearch } from '../../hooks/useSearch';
import { NextImage } from '../../components/NextImage';
import { CompanyContext } from '../../../context';
import * as S from './styles';

export const Header = () => {
  const { logos } = useContext(CompanyContext);
  // console.log(logos);
  const { search, handleChangeSearch } = useSearch();

  return (
    <S.Header className={classNames('header')}>
      <S.HeaderLeft
        padding="1rem"
        className={classNames('header__title__wrapper')}
      >
        <Link href="/">
          {logos.find((logo) => logo.type === 'primary')}
          {/* <NextImage alt="" imageUrl="" /> */}
          {/* <S.TitleBrand className={classNames('header__title')} level="h2">
            Logo
          </S.TitleBrand> */}
        </Link>
      </S.HeaderLeft>
      <Container className={classNames('flex', 'items-center')}>
        <Input
          placeholder="Buscar"
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
      >
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" />
        <Spacer customSize="8px" direction="right" />
        <RichText text="EN" />
      </Container>
    </S.Header>
  );
};
