import React, { useState, useEffect, useCallback } from 'react';
import { Content, Filter, MoviesGrid } from '../components';
import { getMovies } from '../services';
import { API_KEY } from '../constants/constants.js';

export const Movies = () => {
  const [query, setQuery] = useState({
    popularity: '',
    year: '',
    score: '',
    genre: '',
  });
  const [movies, setMovies] = useState({
    data: [],
    isLoaded: false,
    error: null,
  });

  const setPopularity = (e) => {
    if (e.target.value) {
      const value = e.target.value;
      console.log(e.target);
      setQuery((prevState) => {
        return { ...prevState, popularity: value };
      });
    }
  };
  const setYear = (e) => {
    if (e.target.value) {
      console.log('year');
      const value = e.target.value;
      setQuery((prevState) => {
        return { ...prevState, year: value };
      });
    }
  };
  const setScore = (e) => {
    if (e.target.value) {
      const value = e.target.value;
      setQuery((prevState) => {
        return { ...prevState, score: value };
      });
    }
  };
  const setGenre = (e) => {
    if (e.target.value) {
      const value = e.target.value;
      setQuery((prevState) => {
        return { ...prevState, genre: value };
      });
    }
  };

  const fetchMovies = () => {
    const { popularity, score, genre, year } = query;
    getMovies({ API_KEY, popularity, score, genre, year }).then((res) => {
      console.log(res);

      setMovies((prevState) => {
        return {
          ...prevState,
          data: res,
          isLoaded: true,
        };
      });
    });
  };

  const fetchMoviesCallback = useCallback(() => {
    fetchMovies();
  }, [query]);

  useEffect(() => {
    fetchMoviesCallback();
  }, [fetchMoviesCallback]);

  return (
    <Content>
      <Filter
        query={query}
        setPopularity={(e) => setPopularity(e)}
        setYear={(e) => setYear(e)}
        setScore={(e) => setScore(e)}
        setGenre={(e) => setGenre(e)}
        fetchMovies={() => fetchMovies()}
      />
      {movies.data.results ? (
        <MoviesGrid movies={movies.data.results} />
      ) : (
        <div></div>
      )}
    </Content>
  );
};
