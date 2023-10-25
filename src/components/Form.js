import { useSearchParams } from 'react-router-dom';

export const Form = ({ onFormSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={query}
        onChange={event => setSearchParams({ query: event.target.value })}
      />
    </form>
  );
};
