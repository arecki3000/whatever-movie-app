import React from 'react';
import { FilterWrapper, FilterElement, StyledLabel } from '../elements';

export const Filter = ({
  query,
  setPopularity,
  setYear,
  setScore,
  setGenre,
}) => {
  const { popularity, score, genre, year } = query;
  console.log({ popularity, score, genre, year });

  return (
    <FilterWrapper>
      <FilterElement onChange={setPopularity}>
        Have you seen it?
        <StyledLabel id="popularity.desc" choice={popularity}>
          <input type="radio" value="popularity.desc" name="popularity" />{' '}
          Probably...
        </StyledLabel>
        <StyledLabel id="popularity.asc" choice={popularity}>
          <input type="radio" value="popularity.asc" name="popularity" /> Give
          me something new.
        </StyledLabel>
      </FilterElement>
      <FilterElement onChange={setYear}>
        How old is it?
        <StyledLabel id="1960" choice={year}>
          <input type="radio" value="1960" name="year" /> Ancient.
        </StyledLabel>
        <StyledLabel id="1980" choice={year}>
          <input type="radio" value="1980" name="year" /> Classic.
        </StyledLabel>
        <StyledLabel id="2000" choice={year}>
          <input type="radio" value="2000" name="year" /> Fairly new.
        </StyledLabel>
        <StyledLabel id="2020" choice={year}>
          <input type="radio" value="2020" name="year" /> Brand new.
        </StyledLabel>
      </FilterElement>
      <FilterElement onChange={setScore}>
        How bad is it?
        <StyledLabel id="4" choice={score}>
          <input type="radio" value="4" name="score" /> So bad it's actualy
          good.
        </StyledLabel>
        <StyledLabel id="7" choice={score}>
          <input type="radio" value="7" name="score" /> May be bad.
        </StyledLabel>
        <StyledLabel id="10" choice={score}>
          <input type="radio" value="10" name="score" /> Should be good.
        </StyledLabel>
      </FilterElement>
      <FilterElement onChange={setGenre}>
        What it should be about?
        <StyledLabel id="14" choice={genre}>
          <input type="radio" value="14" name="genre" /> Adventure.
        </StyledLabel>
        <StyledLabel id="878" choice={genre}>
          <input type="radio" value="878" name="genre" /> Space.
        </StyledLabel>
        <StyledLabel id="35" choice={genre}>
          <input type="radio" value="35" name="genre" /> Something funny.
        </StyledLabel>
        <StyledLabel id="27" choice={genre}>
          <input type="radio" value="27" name="genre" /> Scary.
        </StyledLabel>
        <StyledLabel id="10749" choice={genre}>
          <input type="radio" value="10749" name="genre" /> Romance.
        </StyledLabel>
        <StyledLabel id="16" choice={genre}>
          <input type="radio" value="16" name="genre" /> Animation.
        </StyledLabel>
        <StyledLabel id="" choice={genre}>
          <input type="radio" value="" name="genre" /> Whatever.
        </StyledLabel>
      </FilterElement>
    </FilterWrapper>
  );
};
