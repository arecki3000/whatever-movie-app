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
  const [trilerLink, setTrilerLink] = useState({});

  useEffect(() => {
    const id = 1880;
    getTriler({ id, API_KEY }).then((res) => {
      setTrilerLink(res);
    });
    getMovie({ id, API_KEY }).then((res) => {
      setMovie((prevState) => {
        return {
          ...prevState,
          data: res,
          isLoaded: true,
        };
      });
    });
  }, []);

  return (
    <ContentWrapper>
      <Nav />
      {!movie.data && <div>Loading...</div>}
      {movie.data && (
        <MovieContent data={movie.data} link={trilerLink.results} />
      )}
      <Footer />
    </ContentWrapper>
  );
};
