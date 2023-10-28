import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchMoviesById } from '../utils/Api';
import Loader from '../components/Loader';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState({});

  const { movieId } = useParams();
  const { title, poster_path, vote_average, overview, genres } = movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';

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
      {loading && <Loader />}
      {error &&
        toast.error(`Whoops, something went wrong. Try reloading the page`)}
      <BackLink to={backLinkHref.current} />
      <img
        src={poster_path ? `${posterBasePath}${poster_path}` : defaultImg}
        alt={title}
        width="200"
        loading="lazy"
      />
      <h2>{title}</h2>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{allGenres}</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="review">Review</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={4000} theme="colored" />
    </main>
  );
};

export default MovieDetails;
