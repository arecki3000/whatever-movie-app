import React from 'react';
// import { Link } from 'react-router-dom';
import { NavWrapper, StyledLink } from '../elements';

export const Nav = ({ home }) => {
  return (
    <NavWrapper home={home}>
      <StyledLink to="/">
        <img
          src={require('../images/Whateverlogo.svg')}
          height="30px"
          alt="logo"
        />
      </StyledLink>
      <ul>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink id="550" to="/movie">
            Random
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/">Log In</StyledLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
