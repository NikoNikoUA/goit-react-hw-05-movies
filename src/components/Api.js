import axios from 'axios';

const API_KEY = '3dcf7f9df138daa52451d10b15111f4e';

axios.defaults.baseURL = 'https://www.themoviedb.org';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export const fetchTrandingMovies = async (params = {}) => {
  const response = await axios.get('/trending/get-trending', params);
  return response.data;
};
