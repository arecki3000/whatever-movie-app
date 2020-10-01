import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper, LinksWrapper } from '../elements';
import { LogoImage } from '../images';

export const Nav = ({ home }) => {
  return (
    <NavWrapper home={home}>
      <LinksWrapper>
        <Link to="/">
          <LogoImage />
        </Link>
      </LinksWrapper>
      <LinksWrapper>
        <Link to="/about">About</Link>
        <Link to="/about">Movies</Link>
      </LinksWrapper>
    </NavWrapper>
  );
};
