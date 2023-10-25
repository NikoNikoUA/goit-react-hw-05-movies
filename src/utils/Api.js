import axios from 'axios';

const API_KEY = '3dcf7f9df138daa52451d10b15111f4e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  key: API_KEY,
};

// trending movies search for Home page

export const fetchTrandingMovies = async (params = {}) => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}`,
    params
  );
  return response.data;
};

// movie by ID

export const fetchMoviesById = async (movieId, params = {}) => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}`,
    params
  );
  return response.data;
};

// movies for Movies page

export const fetchMoviesByQuery = async (movieId, query, params = {}) => {
  const response = await axios.get(
    `/search/movie/?${query}api_key=${API_KEY}`,
    params
  );
  return response.data;
};
