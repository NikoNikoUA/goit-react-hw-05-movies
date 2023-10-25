import { useParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchMoviesById } from '../utils/Api';

const MovieDetails = data => {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [movies, setMovies] = useState({});

  console.log(movies);

  const { movieId } = useParams();
  const { title, poster_path, vote_average, overview, genres } = movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';

  //   const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/moviesList';
  useEffect(() => {
    const controller = new AbortController();

    async function getMovieById() {
      try {
        setLoading(true);
        setError(false);
        const movieById = await fetchMoviesById(movieId, {
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
      <img
        src={poster_path ? `${posterBasePath}${poster_path}` : defaultImg}
        alt={title}
        width="200"
      />
      <h2>{title}</h2>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{allGenres}</p>
    </main>
  );
};

export default MovieDetails;
