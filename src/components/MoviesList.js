import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <section>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesList;
