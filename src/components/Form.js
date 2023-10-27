const Form = ({ value, onSubmit, onChange }) => {
  return (
    <form>
      <label>
        Movie search
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
