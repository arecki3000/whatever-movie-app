import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-top: 5px;
  min-height: 30vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-wrap: wrap;
  }
`;

export const FilterElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  input {
    display: none;
  }
  label {
    margin-top: 5px;
    text-decoration: ${(props) =>
      props.choice === props.id ? 'line-through' : ''};
    font-weight: 100;
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 5px auto 0 auto;
    text-align: center;
  }
`;
