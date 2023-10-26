import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import MovieDetails from 'pages/MovieDetails';
import Movies from '../pages/Movies';
import Review from '../components/Review';
import Cast from '../components/Cast';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="notFound" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
