import { RichText } from '@gamiui/standard';

import { useProductComboCounter } from '../../hooks';
import * as S from './styles';

interface ISauceInCombo {
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
  maxItemsByRow: number;
  // maxItems: number;
  // id: number;
}

export const SauceInCombo = ({
  title,
  description,
  priceByUnit,
  imageUrl,
  maxItemsByRow,
}: // maxItems,
// id,
ISauceInCombo) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItemsByRow);

  // console.log(`ID ${id}:`, quantity);

  return (
    <S.Sauce>
      <S.SauceName>
        {title}
        <S.SaucePrice> + {priceByUnit}</S.SaucePrice>
      </S.SauceName>
      <RichText text={description} margin="0 0 10px" />
      <S.OperatorsImageWrapper>
        <S.SauceImage imageUrl={imageUrl} alt={title} height="42px" />
        <S.ProductOperators>
          <S.QuantityOperator
            onClick={handleSubtract}
            disable={disableSubtract}
          >
            -
          </S.QuantityOperator>
          <S.ProductQuantity>{quantity}</S.ProductQuantity>
          <S.QuantityOperator onClick={handleAdd} disable={disableAdd}>
            +
          </S.QuantityOperator>
        </S.ProductOperators>
      </S.OperatorsImageWrapper>
    </S.Sauce>
  );
};
