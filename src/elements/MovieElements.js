import styled from 'styled-components';

export const MovieWrapper = styled.section`
  width: 80%;
  height: 60vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MovieImage = styled.div`
  margin: 0 auto;
  grid-column: 1 / 2;
  img {
    width: 100%;
  }
`;

export const MovieDescription = styled.div`
  grid-column: 2 / 3;
  margin-left: 30px;
`;
