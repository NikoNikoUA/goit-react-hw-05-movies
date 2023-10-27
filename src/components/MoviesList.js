import { Link, useLocation } from 'react-router-dom';
import { Container, List, ListItem, Title } from './MoviesList.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const posterBasePath = 'https://image.tmdb.org/t/p/w500';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <Container>
        <List>
          {movies.map(({ id, title, poster_path }) => (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path ? `${posterBasePath}${poster_path}` : defaultImg
                  }
                  alt={title}
                  width="200"
                  loading="lazy"
                />
                <Title>{title}</Title>
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </section>
  );
};

export default MoviesList;
