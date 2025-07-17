import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 20px;
  padding: 40px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  background-color: orange;
  margin-bottom: 25px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;
  transition: all 250ms ease;

  &:hover {
    color: blueviolet;
  }

  &.active {
    color: white;
    background-color: blueviolet;

    &:hover {
      border: 1px solid blueviolet;
      background-color: transparent;
      color: blueviolet;
    }
  }
`;

export const ToggleContainer = styled.div`

  position: absolute;
  right: 20%;
  top: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 426px) {
    right: 15%;
  }

  @media screen and (min-width: 768px)  {
    right: 10%;
  }

  @media screen and (min-width: 1230px){
    right: 5%;
  }
`;

export const ToggleBtn = styled.div`
  position: absolute;
  top: 4px;
  left: 3px;
  background-color: orange;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
`;

export const Toggle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 55px;
  border-radius: 25px;
  background-color: black;
  transition: 0.3s;
  &.active {
    background: blueviolet;
    > ${ToggleBtn} {
      left: 30px;
    }
  }
`;
