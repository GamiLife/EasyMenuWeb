import { contentRichText } from '../../mocks/long-richtext';
import * as S from './styles';

export const LongRichText = () => {
  return <S.ContentWrapper dangerouslySetInnerHTML={contentRichText} />;
};
