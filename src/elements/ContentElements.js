import styled from 'styled-components';

export const ContentWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 0 auto;
  }
`;

export const HomeContentElement = styled.div`
  position: realtive;
  height: 50vh;
  width: 80%;
  margin: auto;
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
