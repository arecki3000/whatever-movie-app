import styled from 'styled-components';

export const Grid = styled.div`
  padding-bottom: 30px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const MovieCard = styled.div`
  width: calc(100% / 4 - 30px);
  margin: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 290px;
  @media ${(props) => props.theme.breakpoints.tablet} {
    width: calc(100% / 2 - 30px);
    Span {
      font-size: ${(props) => props.theme.spacings.medium};
    }
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    width: calc(100% - 30px);
  }
`;
