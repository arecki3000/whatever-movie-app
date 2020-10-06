import React, { useEffect, useState } from 'react';
import { Content, MovieContent } from '../components';
import { getMovie, getTriler } from '../services';
import { API_KEY } from '../constants/constants.js';

export const Movie = (props) => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState({
    data: {},
    isLoaded: false,
    error: null,
  });
  const [trilerLink, setTrilerLink] = useState({});

  useEffect(() => {
    getTriler({ id, API_KEY }).then((res) => {
      setTrilerLink(res);
    });
    getMovie({ id, API_KEY }).then((res) => {
      console.log(res);
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
