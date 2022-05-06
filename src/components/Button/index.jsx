import * as S from "./style";

const Button = ({ children, onClick }) => {
  return (
    <S.ButtonDiv>
      <button onClick={onClick}>{children}</button>
    </S.ButtonDiv>
  );
};

export default Button;