import React from 'react';
import { useRouter } from 'next/router';

import { CompanyContext } from '../../../context/company';
import { ISharedBlock, NextImage } from '../NextImage';
import * as S from './styles';

type ILogo = ISharedBlock & {
  typeLogo: string;
};

export const Logo = ({ typeLogo, ...props }: ILogo) => {
  const { logos } = React.useContext(CompanyContext);

  const router = useRouter();
  const { slugCompany } = router.query;

  const logo = logos.find(({ type }) => type === typeLogo);
  if (!logo) return null;
  const { alt, src, type } = logo;

  return (
    <React.Fragment>
      {type === 'primary' ? (
        <S.HeaderLink href={`/${slugCompany}`}>
          <NextImage alt={alt} imageUrl={src} height="68px" {...props} />
        </S.HeaderLink>
      ) : (
        <NextImage alt={alt} imageUrl={src} height="70px" {...props} />
      )}
    </React.Fragment>
  );
};
