import Card from "../Card";
import * as S from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/Products";

export const ProductList = () => {

  const { state } = useContext(ProductsContext)

  return (
    <S.cardUl>
      {state.map((item, index) => (
        <Card key={index} product={item} />
      ))}
    </S.cardUl>
  );
};
