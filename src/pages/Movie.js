import React, { useEffect, useState } from 'react';
import { Nav } from '../components';
import { ContentWrapper } from '../elements';
import { getMovie } from '../services';
import { API_KEY } from '../constants/constants.js';

export const Movie = () => {
  const [movie, setMovie] = useState({
    movie: {},
    isLoaded: false,
    error: null,
  });
  const [hook, setHook] = useState(false);

  const id = 550;
  useEffect(() => {
    getMovie({ id, API_KEY }).then((res) => {
      setMovie((prevState) => {
        return {
          ...prevState,
          movie: res,
          isLoaded: true,
        };
      }, console.log(movie));
      setHook(true);
    });
  }, []);

  return (
    <ContentWrapper>
      <Nav />
      {movie.isLoaded && <div>{movie.movie.title}</div>}
      {!movie.isLoaded && <div>niezaładowane</div>}
      {hook && <div>hook działa</div>}
    </ContentWrapper>
  );
};
