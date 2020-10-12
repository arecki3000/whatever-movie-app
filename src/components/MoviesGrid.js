import React from 'react';
import { Grid, MovieCard } from '../elements';
import placeholder from '../images/film-poster-placeholder.png';
import { Span, StyledLink } from '../elements';

export const MoviesGrid = ({ movies, query }) => {
  const linkStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  };

  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard key={movie.id}>
          <StyledLink
            style={{ linkStyle }}
            to={{ pathname: `/movie/${movie.id}`, id: movie.id }}
            id={movie.id}
          >
            <img
              width="100%"
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : placeholder
              }
              alt={`${movie.title} poster`}
            />
          </StyledLink>
          <Span size="xSmall">
            <strong>{movie.title}</strong>, {movie.release_date.slice(0, 4)}{' '}
          </Span>
        </MovieCard>
      ))}
    </Grid>
  );
};
