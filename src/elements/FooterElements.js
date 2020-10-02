import styled from 'styled-components';

export const HomeFooter = styled.footer`
  width: 23%;
  height: 7rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    text-align: center;
    display: block;
    font-family: ${(props) => props.theme.fonts.code};
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.dark2};
    margin-bottom: 10px;
  }
`;
