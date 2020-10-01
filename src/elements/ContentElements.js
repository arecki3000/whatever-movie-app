import styled from 'styled-components';

export const ContentWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.light};
`;

export const HomeContentElement = styled.div`
  height: 50vh;
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0;

  div {
    grid-row: 2;
  }
`;
