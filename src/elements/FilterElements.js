import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin: 0 auto;
  margin-top: 5px;
  height: 30vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
`;
