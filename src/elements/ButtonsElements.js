import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid rgb(77, 66, 84, 0.2);
  padding: 12px 15px;
  color: #2a2a2a;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  background-color: transparent;
  outline: none;
  display: inline-block;
  border-radius: 4px;
  margin-top: ${(props) => (props.margin ? props.margin : '')};
  :hover {
    border: 1px solid rgb(77, 66, 84, 1);
  }
  a {
    text-decoration: inherit;
    color: inherit;
  }
`;
