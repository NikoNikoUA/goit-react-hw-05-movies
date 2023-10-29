import { useParams, useLocation, Outlet } from 'react-router-dom';
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchMoviesById } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import BackLink from 'components/BackLink/BackLink';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDeatailsCard';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/Movies');

  useEffect(() => {
    const controller = new AbortController();

    async function getMovieById() {
      try {
        setLoading(true);
        setError(false);
        const movieById = await fetchMoviesById(movieId, {
          signal: controller.signal,
        });
        setMovies(movieById);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }

    getMovieById();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <main>
      <div>
        {loading && <Loader />}
        {error &&
          toast.error(`Whoops, something went wrong. Try reloading the page`)}
        <BackLink to={backLinkHref.current} />
        {movies && <MovieDetailsCard movies={movies} />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={4000} theme="colored" />
      </div>
    </main>
  );
};

export default MovieDetails;
