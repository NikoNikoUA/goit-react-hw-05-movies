const Form = ({ value, onSubmit, onChange }) => {
  return (
    <form>
      <label>
        Search by name
        <input
          type="text"
          value={value}
          onChange={event => onChange(event.target.value)}
          placeholder="Enter movie name"
        />
      </label>
      <button type="submit" onClick={onSubmit}>
        Search movie
      </button>
    </form>
  );
};

export default Form;
