import React from 'react';
import { FilterWrapper, FilterElement } from '../elements';

export const Filter = () => {
  return (
    <FilterWrapper>
      <FilterElement>
        Have you seen it?
        <label id="popularity.desc" choice="descending">
          <input type="radio" value="popularity.desc" name="popularity" />{' '}
          Probably...
        </label>
        <label id="popularity.asc" choice="ascending">
          <input type="radio" value="popularity.asc" name="popularity" /> Give
          me something new.
        </label>
      </FilterElement>
      <FilterElement>
        How old is it?
        <label id="1960" choice="old">
          <input type="radio" value="1960" name="year" /> Ancient.
        </label>
        <label id="1980" choice="old1">
          <input type="radio" value="1980" name="year" /> Classic.
        </label>
        <label id="2000" choice="oldwe">
          <input type="radio" value="2000" name="year" /> Fairly new.
        </label>
        <label id="2020" choice="iksakdn">
          <input type="radio" value="2020" name="year" /> Brand new.
        </label>
      </FilterElement>
      <FilterElement>
        How bad is it?
        <label id="4" choice="4">
          <input type="radio" value="4" name="score" /> So bad it's actualy
          good.
        </label>
        <label id="7" choice="6">
          <input type="radio" value="7" name="score" /> May be bad.
        </label>
        <label id="10" choice="6">
          <input type="radio" value="10" name="score" /> Should be good.
        </label>
      </FilterElement>
      <FilterElement>
        What it should be about?
        <label id="14" choice="14">
          <input type="radio" value="14" name="genre" /> Adventure.
        </label>
        <label id="878" choice="123">
          <input type="radio" value="878" name="genre" /> Space.
        </label>
        <label id="35" choice="123">
          <input type="radio" value="35" name="genre" /> Something funny.
        </label>
        <label id="27" choice="123">
          <input type="radio" value="27" name="genre" /> Scary.
        </label>
        <label id="10749" choice="1234">
          <input type="radio" value="10749" name="genre" /> Romance.
        </label>
        <label id="16" choice="1234">
          <input type="radio" value="16" name="genre" /> Animation.
        </label>
        <label id="" choice="1235">
          <input type="radio" value="" name="genre" /> Whatever.
        </label>
      </FilterElement>
    </FilterWrapper>
  );
};
