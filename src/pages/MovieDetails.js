import { useParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchMoviesbyId } from '../components/Api';

const MovieDetails = ({
  title,
  poster_path,
  vote_average,
  overview,
  genres,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState({});

  console.log(movies);

  const { movieId } = useParams();

  //   const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/moviesList';
  useEffect(() => {
    const controller = new AbortController();

    async function getMovieById() {
      try {
        setLoading(true);
        setError(false);
        const movieById = await fetchMoviesbyId(movieId, {
          signal: controller.signal,
        });
        console.log(movieById);
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
      <img src={poster_path} alt={title} width="300" height="400" />
      <h2>{title}</h2>
      <p>User score: {Number(vote_average).toFixed(2)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </main>
  );
};

export default MovieDetails;
