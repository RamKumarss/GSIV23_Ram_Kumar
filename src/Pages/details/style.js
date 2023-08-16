import styled from 'styled-components';

export const StyledDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .detail-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    margin: 20px 20px;
    .right-side {
      width: 25%;
      min-width: 200px;
      max-width: 200px;
      img {
        width: 100%;
        max-width: 200px;
      }
    }
    .left-side {
      width: 73%;
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: start;
      margin-top: 10px;
      div {
        margin-left: 10px;
      }
      .movie-title-block {
        display: flex;
      }
      .title {
        font-size: 16px;
        font-weight: 500;
        height: 25px;
      }
      .rating {
        font-size: 14px;
        color: #605b5b;
      }
      .other-details,
      .disc,
      .cast {
        font-size: 15px;
        margin: 8px 0px 0px 20px;
        min-height: 25px;
        font-weight: 400;
        color: #605b5b;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .detail-container {
      .right-side {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
`;
