import axios from 'axios';

export default function axiosInstance() {
  let instance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1ZWY1YTgyZDk1NGQyZDY4NjVhNjU3OTJmMTg1MyIsInN1YiI6IjY0ZGI4MmU4MzcxMDk3MDBlMjI3NmYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTxFm-x2GRHI46bLJr6WGnwLO3swxfjKjT2lJw2HtyU`,
    },
  });

  return instance;
}
