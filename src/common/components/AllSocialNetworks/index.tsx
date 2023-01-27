import { useContext } from 'react';
import { SocialNetworks } from '@gamiui/standard';

import { CompanyContext, ISocialNetworks } from '../../../context';
import * as S from './styles';

type TSocialNetworks = 'Instagram' | 'Whatsapp' | 'Facebook' | 'Tiktok';

const AllSocialNetworks = () => {
  const { socialNetworks } = useContext(CompanyContext);

  return (
    <S.AllSocialNetworks>
      {socialNetworks.map(
        ({ description, details, id, name }: ISocialNetworks) => {
          const Social = SocialNetworks[name as TSocialNetworks];
          return <Social key={id} message={description} {...details} />;
        }
      )}
    </S.AllSocialNetworks>
  );
};

export default AllSocialNetworks;
