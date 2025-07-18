import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 8px;
  padding: 15px;
  gap: 20px;
  margin: 0 auto;
  margin-bottom: 50px;
  

  @media screen and (min-width: 1200px) {
    width: 1000px;
    flex-direction: row;
    margin-bottom: 20px;
    align-items: unset;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 40px;
  /* font-weight: bold; */
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
`;

export const Heading = styled.h3`
  color: orange;
  font-size: 25px;
`;

export const Info = styled.p`
  color: white;
  font-size: 18px;
`;

export const Img = styled.img`
  @media screen and (max-width: 767px){
    width: 250px;
 }
  `

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row; 
  }
`;

export const NewLink = styled(Link)`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 0;
  color: white;
  cursor: pointer;
  transition: all 250ms ease;

  @media screen and (min-width: 1200px) {
    padding: 10px 100px;
  }

  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;
