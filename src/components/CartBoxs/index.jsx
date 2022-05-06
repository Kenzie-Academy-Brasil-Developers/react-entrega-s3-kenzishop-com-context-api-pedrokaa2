import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import * as S from "./style";

export const CartBoxs = () => {

  const {state} = useContext(CartContext)

  const total = state.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  const brazilianCurrency = total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <S.BoughtList>
      <h3>Resumo do pedido</h3>
      <p>{state.length} produtos</p>
      <p>Total: {brazilianCurrency}</p>
    </S.BoughtList>
  );
};