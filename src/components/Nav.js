import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from '../elements';
import { LogoImage } from '../images/logo';

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <LogoImage fill="red" width="10rem" />
      </Link>
      <div>
        <Link to="/about">About</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </NavWrapper>
  );
};
