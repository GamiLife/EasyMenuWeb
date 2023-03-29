import { RichText } from '@gamiui/standard';

import { useProductComboCounter } from '../../hooks';
import * as S from './styles';

interface IDishInCombo {
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
  maxItemsByRow: number;
}

export const DishInCombo = ({
  title,
  description,
  priceByUnit,
  imageUrl,
  maxItemsByRow,
}: IDishInCombo) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItemsByRow);

  return (
    <S.Dish>
      <S.DishName>
        {title}
        <S.DishPrice> + {priceByUnit}</S.DishPrice>
      </S.DishName>
      <RichText text={description} margin="0 0 10px" />
      <S.OperatorsImageWrapper>
        <S.DishImage imageUrl={imageUrl} alt={title} height="42px" />
        <S.ProductOperators>
          <S.QuantityOperator
            onClick={handleSubtract}
            disable={disableSubtract}
          >
            -
          </S.QuantityOperator>
          <S.ProductQuantity>{quantity}</S.ProductQuantity>
          <S.QuantityOperator
            onClick={handleAdd}
            disable={disableAdd}
            className={disableAdd ? 'disabled' : ''}
          >
            +
          </S.QuantityOperator>
        </S.ProductOperators>
      </S.OperatorsImageWrapper>
    </S.Dish>
  );
};
