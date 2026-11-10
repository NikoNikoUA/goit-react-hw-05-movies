import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 80%;
  bottom: 60px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: orange;

  transition: all 250ms ease;


  @media screen and (min-width: 400px) {
    left: 85%;
  }

  @media screen and (min-width: 700px) {
    left: 90%;
  }

  @media screen and (min-width: 1440px) {
    left: 95%;

    &:hover {
        color: black;
    }
  }

  & svg {
    border-radius: 999px;
  }
`;