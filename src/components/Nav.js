import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from '../elements';

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <div>
        <Link to="/about">About</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </NavWrapper>
  );
};
