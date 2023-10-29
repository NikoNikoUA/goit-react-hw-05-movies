import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
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
    color: blue;
  }

  &.active {
    color: white;
    background-color: blue;

    &:hover {
      border: 1px solid blue;
      background-color: transparent;
      color: blue;
    }
  }
`;
