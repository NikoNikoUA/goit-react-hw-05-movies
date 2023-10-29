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
  const query = searchParams.get('query') ?? '';

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

  const onSubmit = value => {
    if (query === value) {
      return toast.info('Please search something else');
    }
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      <Form onSubmit={onSubmit} />
      {movies.length === 0 && (
        <p style={{ fontSize: '30px' }}>No results found</p>
      )}
      <MoviesList movies={movies} />
      <ToastContainer autoClose={4000} theme="colored" />
    </main>
  );
};

export default Movies;
