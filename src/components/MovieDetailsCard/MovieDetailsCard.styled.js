import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  border: 1px solid white;
  border-radius: 8px;
  padding: 15px;
  gap: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: bold;
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

export const AdditionalInfo = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const AddInfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`;

export const NewLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 200px;
  color: white;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    color: orange;
    border: 1px solid orange;
  }
`;
