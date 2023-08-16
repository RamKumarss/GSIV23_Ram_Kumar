import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard } from './Styled';
import { routes } from '../../Constants/Routes';

export default memo(function Card({ data }) {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`${routes.MOVIE_DETAILS}/${data.id}`);
  };
  return (
    <StyledCard onClick={redirectToDetails.bind(null)}>
      <div className={'img-block'}>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : 'https://png.pngtree.com/element_our/png/20181227/movie-icon-which-is-designed-for-all-application-purpose-new-png_287896.jpg'
          }
          alt={data.id}
        />
      </div>
      <div className='cotent-block'>
        <div className='right-block'>
          <div className='title' title={data.title}>
            {data.title}
          </div>
          <div className='desc'>{data.overview}</div>
        </div>
        <div className='rating'>{Math.round(data.vote_average)}/10</div>
      </div>
    </StyledCard>
  );
});
