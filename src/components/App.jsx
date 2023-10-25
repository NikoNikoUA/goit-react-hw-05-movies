import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import MovieDetails from 'pages/MovieDetails';
import Home from '../pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="review" element={<div>review</div>} />
        </Route>
        <Route path="notFound" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;
