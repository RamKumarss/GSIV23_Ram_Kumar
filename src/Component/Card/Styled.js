import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 200px;
  height: fit-content;
  padding-bottom: 15px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  cursor: pointer;
  .img-block {

    img {
      width: 100%;
      height: 190px;
      object-fit: fill;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
  
  .cotent-block {
    display: flex;
    justify-content: space-between;
    margin: 3px 5px;

    .title {
      font-size: 12px;
      font-weight: 400;
      height: 15px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc {
      font-size: 10px;
      margin-top: 4px;
      height: 23px;
      font-weight: 300;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rating {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    width: 305px;
    max-width: 305px;
  }
`;
