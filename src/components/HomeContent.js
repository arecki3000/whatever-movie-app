import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContentElement, H1, ButtonHome } from '../elements';

const klik = () => {
  console.log(process.env.REACT_APP_API_KEY);
};

console.log(process.env.REACT_APP_API_KEY);

export const HomeContent = () => {
  return (
    <HomeContentElement>
      <div>
        <H1 size="large">Lorem ipsum dolor sit amet consectetur.</H1>
        <Link to="/movies">
          <ButtonHome onClick={() => klik()}>Find your movie</ButtonHome>
        </Link>
      </div>
    </HomeContentElement>
  );
};
