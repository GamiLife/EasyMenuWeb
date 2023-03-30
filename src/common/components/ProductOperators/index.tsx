import * as S from './styles';

interface IProductOperators {
  quantity: number;
  disableAddButton: boolean;
  disableSubtractButton: boolean;
  margin: string;
  width: string;
  handleClickSubtract: () => void;
  handleClickAdd: () => void;
}

export const ProductOperators = ({
  quantity,
  disableAddButton,
  disableSubtractButton,
  margin,
  width,
  handleClickSubtract,
  handleClickAdd,
}: IProductOperators) => {
  return (
    <S.ProductOperators $margin={margin} $width={width}>
      <S.QuantityOperator
        onClick={handleClickSubtract}
        disable={disableSubtractButton}
      >
        -
      </S.QuantityOperator>
      <S.ProductQuantity>{quantity}</S.ProductQuantity>
      <S.QuantityOperator
        onClick={handleClickAdd}
        disable={disableAddButton}
        className={disableAddButton ? 'disabled' : ''}
      >
        +
      </S.QuantityOperator>
    </S.ProductOperators>
  );
};
