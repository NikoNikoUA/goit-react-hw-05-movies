import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByQuery } from '../utils/Api';
import Form from '../components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState(false);
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
        setIsEmpty(false);
        const fetchedMovies = await fetchMoviesByQuery(query, page, {
          signal: controller.signal,
        });
        setIsEmpty(() => {
          if (fetchedMovies.results.length === 0) {
            return true;
          }
        });

        setMovies(prevState => [...prevState, ...fetchedMovies.results]);
        setLoadMore(page < fetchedMovies.total_pages);
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
  }, [query, page]);

  const onSubmit = value => {
    if (query === value) {
      return toast.info('Please search something else');
    }
    setSearchParams(value !== '' ? { query: value } : {});
    setPage(1);
    setMovies([]);
    setLoadMore(false);
  };

  const clickLoadMore = () => {
    setPage(prevState => prevState + 1);
    setLoadMore(true);
  };

  const buttonStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '4px',
    backgroundColor: 'orange',
    padding: '15px 20px',
    color: 'black',
    fontWeight: '500',
    fontSize: '24px',
    transition: 'all 250ms ease',
    cursor: 'pointer',
    marginTop: '20px',
    border: 'none',
  };

  return (
    <main>
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      <Form onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isEmpty && <p style={{ fontSize: '30px' }}>No results</p>}
      <ToastContainer autoClose={4000} theme="colored" />
      {loading && <Loader />}
      {loadMore && (
        <button
          style={{
            ...buttonStyles,
            backgroundColor: hover ? 'transparent' : 'orange',
            color: hover ? 'orange' : 'white',
            border: hover ? '1px solid white' : 'none',
          }}
          onClick={clickLoadMore}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Load more
        </button>
      )}
    </main>
  );
};

export default Movies;
