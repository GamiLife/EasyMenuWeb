import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { NextImage } from '../../common/components/NextImage';
import { messages } from '../../common/constants';
import * as S from './styles';

const { page404 } = messages;

export default function Custom404() {
  return (
    <Container padding="1rem" className={classNames('custom404')}>
      <S.PageError>
        <S.ContentError>
          <S.TitleError level="h2">{page404.title}</S.TitleError>
          <S.ImageError>
            <NextImage imageUrl="" alt={page404.alt} />
          </S.ImageError>
          <RichText text={page404.description} fontWeight="bold" />
        </S.ContentError>

        <S.BackLink href="/">{page404.backlink}</S.BackLink>
      </S.PageError>
    </Container>
  );
}

Custom404.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper title="Pagina de error 404 | Fridays" description="">
    {children}
  </LayoutWrapper>
);
