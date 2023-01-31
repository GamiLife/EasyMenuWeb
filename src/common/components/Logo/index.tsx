import { useContext } from 'react';

import { CompanyContext } from '../../../context';
import { NextImage } from '../NextImage';
import * as S from './styles';

interface ILogo {
  typeLogo: string;
}

export const Logo = ({ typeLogo }: ILogo) => {
  const { logos } = useContext(CompanyContext);
  debugger;
  const logo = logos.find(({ type }) => type === typeLogo);
  if (!logo) return null;
  const { alt, src } = logo;

  return (
    <S.HeaderLink href="/">
      <NextImage alt={alt} imageUrl={src} />
    </S.HeaderLink>
  );
};
