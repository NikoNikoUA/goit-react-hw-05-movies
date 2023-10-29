import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Title = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  font-size: 20px;
  color: white;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: rgba(0, 0, 0, 0.4);

  transition: all 250ms ease;
`;

export const ListItem = styled.li`
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  object-fit: cover;
  overflow: hidden;

  transition: all 250ms ease;

  &:hover,
  &:focus {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);
    transform: scale(1.03);

    & ${Title} {
      bottom: -100%;
    }
  }
`;
