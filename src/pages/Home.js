import { fetchTrandingMovies } from '../utils/Api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getMoviesHome() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMoviesHome = await fetchTrandingMovies(page, {
          signal: controller.signal,
        });

        setMovies(prevState => [...prevState, ...fetchedMoviesHome.results]);
        setLoadMore(page < fetchedMoviesHome.total_pages);
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
  }, [page]);

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
    <>
      <div
        style={{
          maxWidth: '1600px',
          marginTop: 0,
          marginBottom: 0,
          marginRight: 'auto',
          marginLeft: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            color: 'white',
            textShadow: '1px 1px 1px black',
            marginBottom: '20px',
          }}
        >
          Trending movies
        </h1>
      </div>
      {loading && <Loader />}

      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      <MoviesList movies={movies} />
      <ToastContainer autoClose={4000} theme="colored" />
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
    </>
  );
};
export default Home;
