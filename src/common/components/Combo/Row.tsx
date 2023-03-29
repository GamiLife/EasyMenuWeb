import { RichText } from '@gamiui/standard';

import { useProductComboCounter } from '../../hooks';
import * as S from './styles';

interface IRow {
  title: string;
  description: string;
  priceByUnit: number;
  imageUrl: string;
  maxItemsByRow: number;
  isEnableComboRow: boolean;
  handlerAddCombo: () => void;
  handlerSubstractCombo: () => void;
}

export const Row = ({
  title,
  description,
  priceByUnit,
  imageUrl,
  maxItemsByRow,
  isEnableComboRow,
  handlerAddCombo,
  handlerSubstractCombo,
}: IRow) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItemsByRow);

  const isDisableAdd = disableAdd || !isEnableComboRow;

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
            onClick={() => {
              handleSubtract();
              handlerSubstractCombo();
            }}
            disable={disableSubtract}
          >
            -
          </S.QuantityOperator>
          <S.ProductQuantity>{quantity}</S.ProductQuantity>
          <S.QuantityOperator
            onClick={() => {
              handleAdd();
              handlerAddCombo();
            }}
            disable={isDisableAdd}
            className={isDisableAdd ? 'disabled' : ''}
          >
            +
          </S.QuantityOperator>
        </S.ProductOperators>
      </S.OperatorsImageWrapper>
    </S.Dish>
  );
};
