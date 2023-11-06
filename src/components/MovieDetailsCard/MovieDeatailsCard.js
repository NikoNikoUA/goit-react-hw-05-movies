import moment from 'moment';

import {
  Container,
  InfoContainer,
  Title,
  ListItem,
  Heading,
  Info,
  AdditionalInfo,
  AddInfoList,
  NewLink,
} from './MovieDetailsCard.styled';

const MovieDetailsCard = ({ movies }) => {
  const { title, poster_path, vote_average, overview, genres, release_date } =
    movies;
  const allGenres = genres ? genres.map(genre => genre.name).join(', ') : [];
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const posterBasePath = 'https://image.tmdb.org/t/p/w500';
  const formatDate = date => moment(date).format('MMM Do YY');
  return (
    <>
      <Container>
        <img
          src={poster_path ? `${posterBasePath}${poster_path}` : defaultImg}
          alt={title}
          width="400"
          loading="lazy"
        />
        <InfoContainer>
          <Title>
            Title: <b>{title}</b>
          </Title>
          <ul>
            <ListItem>
              <Heading>Release date:</Heading>
              <Info>{formatDate(release_date)}</Info>
            </ListItem>
            <ListItem>
              <Heading>Overview</Heading>
              <Info>{overview !== '' ? overview : 'No overview provided'}</Info>
            </ListItem>
            <ListItem>
              <Heading>Genres</Heading>
              <Info>{allGenres !== '' ? allGenres : 'No genres provided'}</Info>
            </ListItem>
            <ListItem>
              <Heading>User score:</Heading>
              <Info>{Math.round(vote_average * 10)}%</Info>
            </ListItem>
          </ul>
        </InfoContainer>
      </Container>
      <AdditionalInfo>
        <AddInfoList>
          <li>
            <NewLink to="cast">Cast</NewLink>
          </li>
          <li>
            <NewLink to="review">Review</NewLink>
          </li>
        </AddInfoList>
      </AdditionalInfo>
    </>
  );
};

export default MovieDetailsCard;
