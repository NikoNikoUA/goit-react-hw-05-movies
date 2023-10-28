import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByQuery } from '../utils/Api';
import Form from '../components/Form';
import MoviesList from 'components/MoviesList';
import Loader from '../components/Loader';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
    setSearchParams(value !== '' ? { query: value } : {});
  };

  // const onFormSubmit = event => {
  //   event.preventDefault();
  //   if (!value.trim()) {
  //     toast.error('Please enter something!');
  //     return;
  //   }
  //   setSearchParams(value !== '' ? { query: value } : {});
  // };

  return (
    <main>
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      <Form
        value={value}
        onChange={updateQuery}
        // onSubmit={onFormSubmit}
      />
      {/* {movies.length === 0 && <p>No results found</p>} */}
      <MoviesList movies={movies} />
      <ToastContainer autoClose={4000} theme="colored" />
    </main>
  );
};

export default Movies;
