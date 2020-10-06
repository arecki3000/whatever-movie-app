import React, { useState, useEffect } from 'react';
import { Content, Filter, MoviesGrid } from '../components';

export const Movies = () => {
  const [movies, setMovies] = useState({
    data: [],
    isLoaded: false,
    error: null,
  });

  useEffect(() => {
    const URL =
      'https://api.themoviedb.org/3/discover/movie?api_key=fa0290d03c7bf4373b25da8a09a1789f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=300';

    const getMovies = async (URL) => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setMovies((prevState) => {
            return {
              ...prevState,
              data: res,
              isLoaded: true,
            };
          });
        });
    };
    getMovies(URL);
  }, []);
  return (
    <Content>
      <Filter />
      {movies.data.results ? (
        <MoviesGrid movies={movies.data.results} />
      ) : (
        <div></div>
      )}
    </Content>
  );
};
