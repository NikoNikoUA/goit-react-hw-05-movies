import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { HiMiniMagnifyingGlassCircle } from 'react-icons/hi2';
import {
  Container,
  Label,
  SubmitBtn,
  InputContainer,
  Input,
} from './Form.styled';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    const inputValue = value.toLowerCase();
    onSubmit(inputValue);
    if (!inputValue.trim()) {
      toast.error('Please enter something!');
      return;
    }
  };

  return (
    <Container>
      <form onSubmit={onFormSubmit}>
        <InputContainer>
          <Label>
            Search by name
            <Input
              type="text"
              name="query"
              value={value}
              autoFocus
              onChange={event => setValue(event.target.value)}
              placeholder="Enter movie name"
            />
          </Label>
          <SubmitBtn type="submit">
            <HiMiniMagnifyingGlassCircle
              style={{
                width: '35px',
                height: '35px',
                opacity: 0.5,
              }}
            />
          </SubmitBtn>
        </InputContainer>
      </form>
      <ToastContainer autoClose={4000} theme="colored" />
    </Container>
  );
};

export default Form;
