import { useLocation } from 'react-router-dom';
import Header from '../../Component/header/Header';
import { StyledDetailWrapper } from './style';
import { useCallback, useEffect, useState } from 'react';
import { getMovieDetail } from '../../Service/movieService';
import { StyledLoading } from '../../Component/loading/loadingStyle';
export default function Details() {
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState(null);

  const fetchMovieDetail = useCallback(async () => {
    let res = await getMovieDetail(location.pathname?.split('/')[2]);
    if (res.data) setMovieInfo(res.data);
  }, [location.pathname]);

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);
  return (
    <StyledDetailWrapper>
      <Header from='detail' />
      {movieInfo ? (
        <div className='detail-container'>
          <div className='right-side'>
            <img
              src={
                movieInfo?.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieInfo?.poster_path}`
                  : 'https://png.pngtree.com/element_our/png/20181227/movie-icon-which-is-designed-for-all-application-purpose-new-png_287896.jpg'
              }
              alt={movieInfo?.id}
            />
          </div>
          <div className='left-side'>
            <div className='movie-title-block'>
              <div className='title'>{movieInfo?.title}</div>
              <div className='rating'>
                {`(${Math.round(movieInfo?.vote_average)}/10)`}
              </div>
            </div>
            <div className='other-details'>
              {movieInfo?.release_date?.split('-')[0]} |{' '}
              {movieInfo?.release_date?.split('-')[1]} | {movieInfo?.status}
            </div>
            <div className='cast'>
              Production Companies:{' '}
              {movieInfo?.production_companies?.map((el, i) => {
                if (i === movieInfo?.production_companies.length - 1) {
                  return `${el.name}`;
                } else {
                  return `${el.name}, `;
                }
              })}
            </div>
            <div className='disc'>Description: {movieInfo?.overview}</div>
          </div>
        </div>
      ) : (
        <StyledLoading>Loading...</StyledLoading>
      )}
    </StyledDetailWrapper>
  );
}
