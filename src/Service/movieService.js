import { api } from '../Constants/apis';
import axiosInstance from './axios';

export const getMovieList = (page) => {
  try {
    return axiosInstance().get(api.GET_MOVIE, {
      params: { language: 'en-US', page: page },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetail = (id) => {
  try {
    return axiosInstance().get(api.GET_MOVIE_DETAIL + id, {
      params: { language: 'en-US' },
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSearchMovies = (page, value) => {
  try {
    return axiosInstance().get(api.GET_SEARCH_MOVIE, {
      params: {
        language: 'en-US',
        page: page,
        query: value,
        include_adult: false,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
