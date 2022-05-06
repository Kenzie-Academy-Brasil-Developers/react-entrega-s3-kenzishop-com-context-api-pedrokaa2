import * as S from "./style";
import Button from "../Button";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

const Card = ({ product, isCart = false, index }) => {
  const { title, image, description, price } = product;
  const { cartAdd, cartRemove } = useContext(CartContext)

  return (
      <S.cardDiv>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h6>{description}</h6>
        <p>R${price.toFixed(2)}</p>
        {isCart ? (
          <Button onClick={() => cartRemove(index)}>
            Remover do Carrinho
          </Button>
        ) : (
          <Button onClick={() => cartAdd(product)}>
            Adicionar ao Carrinho
          </Button>
        )}
      </S.cardDiv>
  );
};

export default Card;