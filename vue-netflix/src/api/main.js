// src/api/main.js 또는 movie.js
import api from './api';

export const getAllMovies = async () => {
  const response = await api.get('/api/movies');
  console.log(response.data);
  return response.data;
};

export const getMovieById = (id) => api.get(`/api/movies/${id}`);

export const getAllSeries = () => api.get('/api/series');
export const getSeriesById = (id) => api.get(`/api/series/${id}`);
