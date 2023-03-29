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

export const ElementWrapper = ({
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
    <S.ElementWrapper>
      <S.ProductName>
        {title}
        <S.ProductPrice> + {priceByUnit}</S.ProductPrice>
      </S.ProductName>
      {/* <RichText text={description} margin="0 0 10px" /> */}
      <S.OperatorsImageWrapper>
        <S.ProductImage imageUrl={imageUrl} alt={title} height="42px" />
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
    </S.ElementWrapper>
  );
};
