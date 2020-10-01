import styled from 'styled-components';

export const ContentWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.light};
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

export const HomeContentElement = styled.div`
  width: 30%;
  display: flex;
  grid-row: 2 / 4;
  justify-content: center;
  align-items: center;
`;
