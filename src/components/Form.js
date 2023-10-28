import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { HiMiniMagnifyingGlassCircle } from 'react-icons/hi2';
import {
  Container,
  Label,
  SubmitBtn,
  InputContainer,
  Input,
} from './Form.styled';

const Form = ({ value, onChange }) => {
  const [, setSearchParams] = useSearchParams();
  const onSubmit = event => {
    event.preventDefault();
    if (!value.trim()) {
      toast.error('Please enter something!');
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <InputContainer>
          <Label>
            Search by name
            <Input
              type="text"
              value={value}
              autoFocus
              onChange={event => onChange(event.target.value)}
              placeholder="Enter movie name"
            />
          </Label>
          <SubmitBtn type="submit">
            {' '}
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
