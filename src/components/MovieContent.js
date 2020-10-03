import React from 'react';
import {
  MovieWrapper,
  MovieImage,
  MovieDescription,
  H1,
  P,
  Span,
  Button,
} from '../elements';

export const MovieContent = ({ data, link }) => {
  console.log(link);

  return (
    <MovieWrapper>
      <MovieImage>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={`${data.original_title} poster`}
        />
      </MovieImage>
      <MovieDescription>
        <P margin="0 0 20px 0">
          {data.genres &&
            data.genres.map((genre) => {
              return (
                <Span
                  margin="0 5px 0 0"
                  weight="light"
                  size="xxSmall"
                  decoration="underline"
                  key={genre.id}
                >
                  {genre.name} {}{' '}
                </Span>
              );
            })}
        </P>
        {data.release_date && (
          <H1 margin="0 0 20px 0">
            {data.original_title},
            <Span style={{ fontSize: '2.5rem' }}>
              {' '}
              {data.release_date.slice(0, 4)}
            </Span>
          </H1>
        )}

        <P
          spacing="1px"
          margin="0 0 20px 0"
          size="small"
          styling="italic"
          color="dark2"
        >
          "{data.tagline}"
        </P>

        <P
          style={{ width: '80%' }}
          font="second"
          spacing="0.1px"
          margin="0 0 20px 0"
        >
          {data.overview}
        </P>
        <P margin="0 0 20px 0">
          <Span style={{ width: '50%' }}>Duration: {data.runtime}min</Span>
          <Span>
            Rating:
            {data.vote_average}
          </Span>
        </P>
        <Span>
          {link && (
            <Button>
              <a
                href={`http://youtube.com/watch?v=${link.results[0].key}`}
                alt="youtube triler"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Triler
              </a>
            </Button>
          )}
        </Span>
      </MovieDescription>
    </MovieWrapper>
  );
};
