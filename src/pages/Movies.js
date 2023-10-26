import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
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
  }, [value]);

  const updateQuery = value => {
    const nextParams = value !== '' ? { query: value } : {};
    setSearchParams(nextParams);
  };

  // const onFormSubmit = event => {
  //   event.preventDefault();
  //   if (!value) {
  //     return;
  //   }
  //   setSearchParams(value !== '' ? { query: value } : {});
  //   Movies();
  // };

  return (
    <>
      <Form onChange={updateQuery} value={value} onClick={Movies} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
