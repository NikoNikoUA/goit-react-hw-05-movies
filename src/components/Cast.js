import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../utils/Api';

const Cast = () => {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    const controller = new AbortController();

    async function getReview() {
      try {
        setLoading(true);
        setError(false);
        const fetchedCast = await fetchCast(movieId, {
          signal: controller.signal,
        });

        setCast(fetchedCast.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    getReview();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => {
            const { name, character, profile_path } = actor;
            return (
              <li key={movieId}>
                <img
                  src={
                    profile_path
                      ? `${posterBasePath}${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width="50"
                  loading="lazy"
                />
                <h3>Name: {name}</h3>
                <p>Character played: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is not information on cast for this movie</p>
      )}
    </div>
  );
};

export default Cast;
