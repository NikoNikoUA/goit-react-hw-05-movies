import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from '../components/Api';

const MoviesList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await fetchTrandingMovies({
          signal: controller.signal,
        });
        console.log(fetchedMovies);

        setMovies(...fetchedMovies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return <li key={id}>{original_title}</li>;
      })}
    </ul>
  );
};

export default MoviesList;
