import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  margin: 0 auto;
  height: 5rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  img {
    fill: ${(props) => props.theme.colors.light};
  }
  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li:hover {
      text-decoration: underline;
    }
    li:last-child {
      padding: 5px 10px;
      border: 1.3px solid;
      border-radius: 6px;
      color: rgb(19, 51, 58, 0.2);
      &:hover {
        text-decoration: none;
        color: rgb(19, 51, 58, 1);
      }
    }
    @media ${(props) => props.theme.breakpoints.tablet} {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.code};
  font-size: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.dark1};
`;
