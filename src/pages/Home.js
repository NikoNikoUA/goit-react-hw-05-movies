import { fetchTrandingMovies } from '../utils/Api';
import { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList';

const Home = () => {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
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
      <h1>Trending movies</h1>
      <MoviesList movies={movies} />
    </>
  );
};
export default Home;
