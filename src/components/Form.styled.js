import styled from 'styled-components';

export const Input = styled.input`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 600px;
  overflow: hidden;
  border: none;
  height: 40px;
  font-size: 20px;
  outline: none;
  padding: 5px 8px;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 22px;
  font-weight: 500;
  color: white;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SubmitBtn = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  margin-bottom: 40px;
`;
