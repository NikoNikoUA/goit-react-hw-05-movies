// import { useSearchParams } from 'react-router-dom';
export const Form = ({ value, onSubmit, onChange }) => {
  // const onInputChange = event => {
  //   const initialValue = event.target.value;
  //   // if (!initialValue) {
  //   //   return;
  //   // }
  //   // onChange(initialValue);
  // };
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Enter movie name"
      />
      <button type="button" onClick={onSubmit}>
        Search movie
      </button>
    </form>
  );
};
