import React, { useEffect, useState } from 'react';
import { Content, MovieContent } from '../components';
import { getMovie, getTriler } from '../services';
import { API_KEY } from '../constants/constants.js';

export const Movie = () => {
  // TODO replace current state with global state
  // TODO allow Movie to render random movie OR movie chosen in movies collection
  const [movie, setMovie] = useState({
    data: {},
    isLoaded: false,
    error: null,
  });
  const [trilerLink, setTrilerLink] = useState({});
  const id = 550;

  useEffect(() => {
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
    <Content>
      {!movie.data && <div>Loading...</div>}
      {movie.data && (
        <MovieContent data={movie.data} link={trilerLink.results} />
      )}
    </Content>
  );
};
