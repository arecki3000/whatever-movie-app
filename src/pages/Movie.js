import React, { useEffect, useState } from 'react';
import { Nav, Footer, MovieContent } from '../components';
import { ContentWrapper } from '../elements';
import { getMovie, getTriler } from '../services';
import { API_KEY } from '../constants/constants.js';

export const Movie = () => {
  const [movie, setMovie] = useState({
    data: {},
    isLoaded: false,
    error: null,
  });
  const [trilerLink, setTrilerLink] = useState('');

  const id = 181812;
  useEffect(() => {
    getMovie({ id, API_KEY }).then((res) => {
      setMovie((prevState) => {
        return {
          ...prevState,
          data: res,
          isLoaded: true,
        };
      });
    });
    getTriler({ id, API_KEY }).then((res) => {
      setTrilerLink(res);
    });
  }, []);

  return (
    <ContentWrapper>
      <Nav />
      {!movie.data && <div>Loading...</div>}
      {movie.data && <MovieContent data={movie.data} link={trilerLink} />}
      <Footer />
    </ContentWrapper>
  );
};
