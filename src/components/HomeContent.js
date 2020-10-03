import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContentElement, H1, Button } from '../elements';

const klik = () => {
  console.log(process.env.REACT_APP_API_KEY);
};

export const HomeContent = () => {
  return (
    <HomeContentElement>
      <div>
        <H1 size="large">Lorem ipsum dolor sit amet consectetur.</H1>
        <Link to="/movies">
          <Button margin="4rem" onClick={() => klik()}>
            Find your movie
          </Button>
        </Link>
      </div>
    </HomeContentElement>
  );
};
