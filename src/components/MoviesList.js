import { fetchMoviesByQuery } from '../utils/Api';
import { fetchTrandingMovies } from '../utils/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    if (!query) {
      return;
    }

    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await fetchMoviesByQuery(query, {
          signal: controller.signal,
        });

        setMovies(fetchedMovies.results);
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
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    async function getMoviesHome() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMoviesHome = await fetchTrandingMovies({
          signal: controller.signal,
        });

        setMovies(fetchedMoviesHome.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getMoviesHome();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      <h1>Trending movies</h1>
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
