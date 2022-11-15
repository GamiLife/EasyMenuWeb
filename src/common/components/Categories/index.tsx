import { Icon, RichText } from '@gamiui/standard';
import { categories } from '../../mocks';
import * as S from './styles';

export const Categories = () => {
  return (
    <S.Categories>
      {categories.map(({ text, icon }, index: number) => (
        <S.Category key={index}>
          <Icon name={icon} />
          <RichText text={text} />
        </S.Category>
      ))}
    </S.Categories>
  );
};
