import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1000px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 8px;
  padding: 40px 15px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 0px 0px 4px black;
  padding: 15px;
  width: 150px;
  height: 265px;
`;

export const Heading = styled.h3`
  color: white;
  text-align: center;
`;

export const CharacterInfo = styled.p`
  color: orange;
  text-align: center;
`;
