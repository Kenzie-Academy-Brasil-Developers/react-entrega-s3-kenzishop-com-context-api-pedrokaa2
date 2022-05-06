import styled from "styled-components";

export const LogoHeader = styled.div `
  box-shadow: 5px 5px 15px 5px var(--darkgrayish);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 0px;
  img {
    width: 100%;
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
  @media (min-width: 768px){
    justify-content: space-between;
    flex-direction: row;
    padding: 40px 20px;
    box-shadow: 2px 2px 10px 2px var(--darkgrayish);
    img {
      width: 200px;
    }
    button {
      width: 100%
    }
  }
`