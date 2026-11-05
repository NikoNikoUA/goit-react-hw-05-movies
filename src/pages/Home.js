import { fetchTrandingMovies } from '../utils/Api';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const savedHomeState = JSON.parse(sessionStorage.getItem('homeState') || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(() => savedHomeState?.movies || []);
  const [loadMore, setLoadMore] = useState(() => savedHomeState?.loadMore || false );
  const [page, setPage] = useState(() => savedHomeState?.page || 1);
  const [loadedPage, setLoadedPage] = useState(() => savedHomeState?.page || 0);
  const [hover, setHover] = useState(false);

  const hasRestoredScroll = useRef(false);

  useEffect(() => {
    if (page <= loadedPage) return;
    const controller = new AbortController();

    async function getMoviesHome() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMoviesHome = await fetchTrandingMovies(page, {
          signal: controller.signal,
        });

        setMovies(prevState => [...prevState, ...fetchedMoviesHome.results]);
        setLoadedPage(page);
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

  useEffect(() => {
    if (movies.length === 0 || loadedPage === 0) return;

    sessionStorage.setItem(
      'homeState',
      JSON.stringify({
        movies,
        page: loadedPage,
        loadMore,
      })
    );
  }, [movies, loadedPage, loadMore]);

  useEffect(() => {
    const saveScrollPosition = () => {
      const currentPosition = window.scrollY;

      // Don't overwrite a previously saved position with 0
      if (currentPosition > 0) {
        sessionStorage.setItem('homeScrollY', currentPosition);
      }
    };

    window.addEventListener('scroll', saveScrollPosition, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
    };
  }, []);

  useLayoutEffect(() => {
    if (loading || movies.length === 0 || hasRestoredScroll.current) {
      return;
    }

    const savedPosition = sessionStorage.getItem('homeScrollY');

    if (savedPosition !== null) {
      window.scrollTo({
        top: Number(savedPosition),
        behavior: 'instant',
      });
    }

    hasRestoredScroll.current = true;
  }, [loading, movies.length]);

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
