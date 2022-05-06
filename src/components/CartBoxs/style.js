import styled from "styled-components";

export const BoughtList = styled.div `
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 20px;
  margin: 0 auto;
  border: 1px solid var(--darkgrayish);
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
  h4 {
    background-color: var(--darkgrayish);
    color: var(--blueish);
    padding: 10px;
    border-radius: 10px;
    margin-top: 5px;
  }
  @media (min-width: 768px){
    justify-content: space-between;
    flex-direction: row;
    padding: 40px 20px;
    img {
      width: 200px;
    }
    button {
      width: 100%
    }
  }
`