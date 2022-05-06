import Card from "../Card";
import Logo from "../../assets/Img/LogoDiecastMania.png";
import { useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

export const Cart = () => {

  const {state} = useContext(CartContext)

  useEffect(() => {
    localStorage.setItem("storageCart", JSON.stringify(state))
  }, [state])

  return (
    <S.Cart>
    <Link to="/">
      <img src={Logo} alt="Diecast Mania"/>
    </Link>
      <h4>Carrinho</h4>
      {state.length > 0 ? (
        <div>
          {state.map((product, index) => (
            <Card index={index} key={index} product={product} isCart />
          ))}
        </div>
      ) : (
        <p>Sem produtos ainda.</p>
      )}
    </S.Cart>
  );
};