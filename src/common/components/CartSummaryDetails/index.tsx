import * as S from './styles';

interface ICartSummaryDetails {
  totalToPay: number;
}

export const CartSummaryDetails = ({ totalToPay }: ICartSummaryDetails) => {
  return (
    <S.CartSummaryDetails>
      <S.PaymentSummary>
        <S.BaseContainer>
          <S.BTag>Subtotal:</S.BTag>
          <S.SpanTag>S/{totalToPay}</S.SpanTag>
        </S.BaseContainer>
        <S.BaseContainer>
          <S.BTag>Total a pagar:</S.BTag>
          <S.SpanTag>S/{totalToPay}</S.SpanTag>
        </S.BaseContainer>
      </S.PaymentSummary>
      <S.SummaryActions className="summary-actions">
        <S.SummaryButton>Realizar compra</S.SummaryButton>
        <S.SummaryButton className="summary-actions__keep-buying">
          Seguir comprando
        </S.SummaryButton>
      </S.SummaryActions>
    </S.CartSummaryDetails>
  );
};
