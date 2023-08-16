import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 300px;
  margin-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  background-color: lightgrey;
  img {
    width: 20px;
    height: 20px;
    margin: 0px 10px;
  }
  .search {
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: lightgrey;
    outline: none;
  }
  .search:focus{
    border: none !important;
    outline: none !important;
  }
`;
