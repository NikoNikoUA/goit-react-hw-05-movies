import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 8px;
  padding: 20px;

  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;

export const Author = styled.h3`
  color: orange;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
`;
