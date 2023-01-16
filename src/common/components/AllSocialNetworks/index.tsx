import { SocialNetworks } from '@gamiui/standard';

import * as S from './styles';

const socialNetworks = {
    whatsapp: {
        message: 'Hi, man!',
        phone: '917586966'
    },
    instagram: {
        user: 'user.test',
        color: 'green'
    },
    facebook: {
        user: 'ecz97',
        color: '#1877f2'
    },
    tiktok: {
        user: 'followchain',
        color: '#161823'
    }
}

const { whatsapp, instagram, facebook, tiktok } = socialNetworks;

const AllSocialNetworks = () => {
    return (
        <S.AllSocialNetworks>
            <SocialNetworks.Whatsapp message={whatsapp.message} phone={whatsapp.phone} />
            <SocialNetworks.Instagram user={instagram.user} color={instagram.color} />
            <SocialNetworks.Facebook user={facebook.user} color={facebook.color} />
            <SocialNetworks.Tiktok user={tiktok.user} color={tiktok.color} />
        </S.AllSocialNetworks>
    )  
}

export default AllSocialNetworks;