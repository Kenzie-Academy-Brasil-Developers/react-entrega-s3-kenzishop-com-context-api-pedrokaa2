import styled from "styled-components";

export const Cart = styled.div `
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8% 0px;
  margin: 0px 15%;
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  button {
    padding: 10px;
    border: 0;
    color: var(--white);
    border-radius: 10px;
    width: 70vw;
    text-align: center;
    font-weight: 900;
    margin: 20px 0px;
  }
  h4 {
    background-color: var(--darkgrayish);
    color: var(--blueish);
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
  }
  @media (min-width: 768px){
    justify-content: space-between;
    flex-direction: column;
    padding: 40px 20px;
    button {
      width: 100%
    }
  }
`