import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByQuery } from '../utils/Api';
import { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  // const { movieId } = useParams();
  // useEffect(() => {
  //   if (!movieId) return;
  // }, [movieId]);

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

  const onFormSubmit = event => {
    event.preventDefault();
    if (!value) {
      toast.error('Please enter something!');
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <Form onChange={updateQuery} value={value} onSubmit={onFormSubmit} />
      <MoviesList movies={movies} />
      <ToastContainer />
    </>
  );
};

export default Movies;
