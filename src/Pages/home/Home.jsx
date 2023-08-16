import { useCallback, useEffect, useRef, useState } from 'react';
import Card from '../../Component/Card/Card';
import Header from '../../Component/header/Header';
import { StyledHomeWrapper } from './style';
import { getMovieList, getSearchMovies } from '../../Service/movieService';
import { useSelector } from 'react-redux';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const pageRef = useRef(1);
  const totalPages = useRef(0);
  const containerRef = useRef(null);
  const searchReducer = useSelector((state) => state.searchReducer);

  const fetchMovies = useCallback(async () => {
    let res = await getMovieList(pageRef.current);
    if (res?.data?.results?.length) {
      setMovies((prevMovies) => [...prevMovies, ...res?.data?.results]);
      pageRef.current++;
      totalPages.current = res?.data?.total_pages;
    }
  }, []);

  const fetchMoviesWithSearch = useCallback(async () => {
    let res = await getSearchMovies(pageRef.current, searchReducer.value);
    if (res?.data?.results?.length) {
      setMovies((prevMovies) => [...prevMovies, ...res?.data?.results]);
      pageRef.current++;
      totalPages.current = res?.data?.total_pages;
    }
  }, [searchReducer.value]);

  useEffect(() => {
    pageRef.current = 1;
    totalPages.current = 0;
    setMovies([]);
    if (searchReducer.value) {
      fetchMoviesWithSearch();
    } else {
      fetchMovies();
    }
  }, [searchReducer, fetchMoviesWithSearch, fetchMovies]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (
      container.scrollHeight - container.scrollTop ===
      container.clientHeight
    ) {
      if (pageRef.current <= totalPages.current) {
        if (searchReducer.value) {
          fetchMoviesWithSearch();
        } else {
          fetchMovies();
        }
      }
    }
  }, [fetchMovies, fetchMoviesWithSearch, searchReducer.value]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <StyledHomeWrapper>
      <Header from='home' />
      <div ref={containerRef} className='home-container'>
        {movies.length > 0 &&
          movies?.map((el) => <Card key={el.id} data={el} />)}
      </div>
    </StyledHomeWrapper>
  );
}
