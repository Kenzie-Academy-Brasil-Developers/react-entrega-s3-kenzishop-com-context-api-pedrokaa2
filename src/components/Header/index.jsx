import Button from "../Button";
import Logo from "../../assets/Img/LogoDiecastMania.png";
import { useHistory } from "react-router";
import * as S from "./style";

const Header = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <S.LogoHeader>
      <img src={Logo} alt="Diecast Mania" />
      <Button onClick={() => handleClick("/cart")}>Carrinho</Button>
    </S.LogoHeader>
  );
};

export default Header;