import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  max-height: 5rem;
  min-height: 5rem;
  min-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  img {
    fill: ${(props) => props.theme.colors.light};
  }
  img.menu {
    display: none;
  }
  ul {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li:hover {
      text-decoration: underline;
    }
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    ul.menu {
      visibility: hidden;
    }
    ul.close {
      position: absolute;
      top: 5rem;
      left: 0;
      margin: 0 auto;
      background-color: ${(props) => props.theme.colors.light};
      justify-content: space-around;
      flex-direction: column;
      width: 100%;
      height: 80%;
      z-index: 100;
    }
    img.menu {
      display: block;
      z-index: 1000;
    }
    a {
      font-size: ${(props) => props.theme.spacings.large};
    }
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    a {
      font-size: ${(props) => props.theme.spacings.medium};
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.code};
  font-size: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.dark1};
`;
