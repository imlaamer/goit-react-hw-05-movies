import axios from 'axios';

const API_KEY = 'ed190ef9a1bf04bb88305caa513acb81';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async page => {
  const { data } = await axios.get(`trending/movie/day?page=${page}`);
  return data;
};
export const getMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`);
  return data;
};
