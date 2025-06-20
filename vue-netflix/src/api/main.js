// src/api/main.js 또는 movie.js
import api from './api';

export const getAllMovies = async () => {
  const response = await api.get('/movies');
  console.log(response.data);
  return response.data;
};

export const getMovieById = (id) => api.get(`/movies/${id}`);

export const getAllSeries = () => api.get('/series');
export const getSeriesById = (id) => api.get(`/series/${id}`);
