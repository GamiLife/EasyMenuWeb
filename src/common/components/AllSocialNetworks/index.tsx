import { SocialNetworks } from '@gamiui/standard';

import * as S from './styles';

export const AllSocialNetworks = () => {
    return (
        <S.AllSocialNetworks>
            <SocialNetworks.Whatsapp message='Hi, man!' phone='917586966' />
            <SocialNetworks.Instagram user='user.test' color='green' />
            <SocialNetworks.Facebook user='ecz97' color='blue' />
            <SocialNetworks.Tiktok user='followchain' color='black' />
        </S.AllSocialNetworks>
    )  
}