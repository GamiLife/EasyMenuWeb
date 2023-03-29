import { useProductComboCounter } from '../../hooks';
import * as S from './styles';

interface IProductOperators {
  maxItems: number;
}

export const ProductOperators = ({ maxItems }: IProductOperators) => {
  const { quantity, disableAdd, disableSubtract, handleSubtract, handleAdd } =
    useProductComboCounter(maxItems);

  return (
    <S.ProductOperators>
      <S.QuantityOperator onClick={handleSubtract} disable={disableSubtract}>
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
  );
};
