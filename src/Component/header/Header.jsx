import React, { memo } from 'react';
import { StyledHeader } from './Styled';
import SearchBar from '../search-bar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../Constants/Routes';

export default memo(function Header({ from }) {
  const navigate = useNavigate();
  const redirect = () => {
    if (from === 'detail') {
      navigate(routes.HOME);
    }
  };
  return (
    <StyledHeader>
      {from === 'home' && <SearchBar />}
      {from === 'detail' && <div></div>}
      <img
        className='home-img'
        src='https://static.thenounproject.com/png/3574480-200.png'
        alt='home'
        onClick={redirect}
      />
    </StyledHeader>
  );
});
