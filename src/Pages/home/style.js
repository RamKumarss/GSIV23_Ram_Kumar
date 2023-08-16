import styled from 'styled-components';

export const StyledHomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .home-container {
    height: 85vh;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 20px 10px;
    scrollbar-width: none; /* Hide standard scrollbar (Firefox) */
    -ms-overflow-style: none; /* Hide standard scrollbar (IE/Edge) */
  }
  .home-container::-webkit-scrollbar {
    width: 0; /* Hide standard scrollbar (Chrome/Safari) */
  }
`;
