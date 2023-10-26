export const Form = ({ value, onChange, onSubmit }) => {
  const onInputChange = event => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onInputChange}
        placeholder="Enter movie name"
      />
      <button type="button">Search movie</button>
    </form>
  );
};
