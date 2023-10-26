import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByQuery } from '../utils/Api';
import { Form } from '../components/Form';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';

  const getMovies = () => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await fetchMoviesByQuery(value, {
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
  };

  const updateQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const onFormSubmit = event => {
    event.preventDefault();
    if (!value) {
      toast.error('Please enter something!');
      return;
    }
    getMovies();
    setSearchParams(value !== '' ? { query: value } : {});
    event.target.reset();
  };

  return (
    <>
      <Form value={value} onChange={updateQuery} onSubmit={onFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
<ToastContainer autoClose={4000} theme="colored" />;

export default Movies;
