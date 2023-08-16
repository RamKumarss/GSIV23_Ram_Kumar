import React, { memo } from 'react';
import { StyledSearch } from './Styled';
import { useDispatch } from 'react-redux';
import { updateValue } from '../../Store/reducer/searchInput';

export default memo(function SearchBar() {
  const dispatch = useDispatch();

  const updateSearchValue = (e) => {
    let debounceTimeout;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(function () {
      dispatch(updateValue(e.target.value));
    }, 1000);
  };
  return (
    <StyledSearch>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1890px-Vector_search_icon.svg.png'
        alt='search'
      />
      <input
        className='search'
        type='search'
        onChange={updateSearchValue.bind(null)}
        placeholder='Search'
      />
    </StyledSearch>
  );
});
