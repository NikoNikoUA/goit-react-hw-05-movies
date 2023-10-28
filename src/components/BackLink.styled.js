import styled from 'styled-components';

export const GoBackBtn = styled.button`
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: orange;
  font-size: 24px;
  transition: all 250ms ease;
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;

  &:hover {
    color: orange;
    background-color: transparent;
    border: 1px solid white;
    transform: scale(1);
  }
`;
