import { RichText } from '@gamiui/standard';

import { GetDishResponseDTO } from '../../types/getDish.type';
import * as S from './styles';

export const SauceInCombo = ({
  title,
  description,
  priceByUnit,
  imageUrl,
}: GetDishResponseDTO.Sauce) => {
  return (
    <S.Sauce>
      <S.SauceName>
        {title}
        <S.SaucePrice> + {priceByUnit}</S.SaucePrice>
      </S.SauceName>
      <RichText text={description} margin="0 0 10px" />
      <S.OperatorsImageContainer>
        <S.SauceImage imageUrl={imageUrl} alt={title} height="42px" />
        <S.ProductInlineOperators>
          <S.QuantityOperator
          // onClick={handleSubtract}
          // disable={disableSubtract}
          >
            -
          </S.QuantityOperator>
          <S.ProductQuantity>0</S.ProductQuantity>
          {/* <S.ProductQuantity>{quantity}</S.ProductQuantity> */}
          <S.QuantityOperator
          // onClick={handleAdd}
          // disable={disableAdd}
          >
            +
          </S.QuantityOperator>
        </S.ProductInlineOperators>
      </S.OperatorsImageContainer>
    </S.Sauce>
  );
};
