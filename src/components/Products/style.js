import styled from "styled-components";

export const cardUl = styled.div `
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  @media (min-width: 768px){
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 70%;
    margin: 0 auto;
  }
`
