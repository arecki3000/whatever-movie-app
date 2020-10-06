import React, { useState } from 'react';
import { NavWrapper, StyledLink } from '../elements';

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const icon = open ? 'close' : 'menu';

  const toggleOpen = () => {
    setOpen((prevState) => {
      return !open;
    });
  };

  return (
    <NavWrapper>
      <StyledLink to="/">
        <img
          src={require('../images/Whateverlogo.svg')}
          height="30px"
          alt="logo"
        />
      </StyledLink>
      <ul className={icon}>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </ul>
      <img
        height="30px"
        onClick={() => toggleOpen()}
        className={icon}
        src={require(`../images/${icon}.svg`)}
        alt="menu"
      />
    </NavWrapper>
  );
};
