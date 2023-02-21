import { useContext } from 'react';
import { useRouter } from 'next/router';

import { CompanyContext } from '../../../context/company';
import { NextImage } from '../NextImage';
import * as S from './styles';

interface ILogo {
  typeLogo: string;
}

export const Logo = ({ typeLogo }: ILogo) => {
  const { logos } = useContext(CompanyContext);

  const router = useRouter();
  const { slugCompany } = router.query;

  const logo = logos.find(({ type }) => type === typeLogo);
  if (!logo) return null;
  const { alt, src } = logo;

  return (
    <S.HeaderLink href={`${slugCompany}`}>
      <NextImage alt={alt} imageUrl={src} />
    </S.HeaderLink>
  );
};
