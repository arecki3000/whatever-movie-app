import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background: ${(props) => props.theme.colors.light};
  min-height: 100vh;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const HomeContentElement = styled.div`
  position: realtive;
  height: 50vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0;

  div {
    display: inline-block;
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
`;

export const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 90%;
  }
`;

export const MoviesGrid = styled.div`
  min-height: 40%;
`;
