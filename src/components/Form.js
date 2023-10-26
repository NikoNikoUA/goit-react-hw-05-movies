import { ToastContainer, toast } from 'react-toastify';

export const Form = ({ value, onChange, onSubmit }) => {
  const onInputChange = event => {
    const initialValue = event.target.value;
    if (!initialValue) {
      toast.error('Please enter something!');
      return;
    }
    onChange(initialValue);
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder="Enter movie name"
      />
      <button type="button" onClick={onSubmit}>
        Search movie
      </button>
    </form>
  );
};
<ToastContainer autoClose={4000} theme="colored" />;
