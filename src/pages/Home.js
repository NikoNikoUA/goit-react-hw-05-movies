import { fetchTrandingMovies } from '../utils/Api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  console.log(movies);
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
    </>
  );
};
export default Home;
