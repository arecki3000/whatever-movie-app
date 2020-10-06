import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: absolute;
  top: 5rem;
  width: inherit;
  margin: 0 auto;
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

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin: 5px auto 0 auto;
    text-align: center;
  }
`;

export const StyledLabel = styled.label`
  margin-top: 5px;
  text-decoration: ${(props) =>
    props.id === props.choice ? 'line-through' : ''};
`;
