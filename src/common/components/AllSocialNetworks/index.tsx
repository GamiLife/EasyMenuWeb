import { SocialNetworks } from '@gamiui/standard';
// import { useEffect, useState } from 'react';
// import { get } from '../../../config/api';

import * as S from './styles';

const socialNetworks = {
  whatsapp: {
    message: 'Hi, man!',
    phone: '917586966',
  },
  instagram: {
    user: 'user.test',
    color: 'green',
  },
  facebook: {
    user: 'ecz97',
    color: '#1877f2',
  },
  tiktok: {
    user: 'followchain',
    color: '#161823',
  },
};

const { whatsapp, instagram, facebook, tiktok } = socialNetworks;

const AllSocialNetworks = () => {
  // const [brand, setBrand] = useState({
  //   metaDescription: '',
  //   metaTitle: '',
  // });
  // const [company, setCompany] = useState({
  //   description: '',
  //   id: 1,
  //   name: '',
  //   slugUrl: '',
  // });
  // const [logos, setLogos] = useState([]);
  // const [socialNetworks, setSocialNetworks] = useState([]);

  // useEffect(() => {
  //   async function companyFetch() {
  //     const { data } = await get(`companies/slug/sea-fast-food`);
  //     console.log(data);
  //     const { brand, company, logos, socialNetworks } = data;
  //     const { metaDescription, metaTitle } = brand;
  //     const { description, id, name, slugUrl } = company;

  //     setBrand({
  //       metaDescription,
  //       metaTitle,
  //     });
  //     setCompany({
  //       description,
  //       id,
  //       name,
  //       slugUrl,
  //     });
  //     setLogos(logos);
  //     setSocialNetworks(socialNetworks);
  //   }
  //   companyFetch();
  // }, []);

  return (
    <S.AllSocialNetworks>
      <SocialNetworks.Whatsapp
        message={whatsapp.message}
        phone={whatsapp.phone}
      />
      <SocialNetworks.Instagram user={instagram.user} color={instagram.color} />
      <SocialNetworks.Facebook user={facebook.user} color={facebook.color} />
      <SocialNetworks.Tiktok user={tiktok.user} color={tiktok.color} />
    </S.AllSocialNetworks>
  );
};

export default AllSocialNetworks;
