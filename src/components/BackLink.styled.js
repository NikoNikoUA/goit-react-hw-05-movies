import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const GoBackBtn = styled.button`
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: orange;
  font-size: 24px;
  transition: all 250ms ease;
  border: none;
  border-radius: 4px;

  &:hover {
    color: orange;
    background-color: transparent;
    border: 1px solid white;
    transform: scale(1);
  }
`;
