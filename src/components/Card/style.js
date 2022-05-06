import styled from "styled-components";

export const cardDiv = styled.div `
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--darkgray);
  padding: 8% 0px;
  margin: 0px 10px;
  img {
    width: 90vw;
    margin: 0 auto;
    object-fit: cover;
    min-height: 193px;
    max-height: 450px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px;
    border: 0;
    color: var(--white);
    border-radius: 10px;
    width: 60vw;
    text-align: center;
    font-weight: 900;
  }
  h3, h6, p {
    margin-bottom: 10px;
  }
  @media (min-width: 768px){
    justify-content: space-between;
    width: 100%;
    img {
      width: 100%;
    }
    button {
      width: 50%
    }
  }
`
