import styled from 'styled-components';

export const FooterElement = styled.footer`
  width: 80%;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: column;
  }

  div {
    width: 10rem;
    display: flex;
    justify-content: space-between;
  }
  p {
    text-align: center;
    display: block;
    font-family: ${(props) => props.theme.fonts.code};
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.dark2};
  }
`;
