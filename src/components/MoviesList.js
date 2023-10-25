import React, { useEffect, useState } from 'react';
import { fetchTrandingMovies } from '../components/Api';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await fetchTrandingMovies({
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
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
