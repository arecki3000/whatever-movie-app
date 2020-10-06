export const getMovie = async ({ id, API_KEY }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const movie = response.json();
  return movie;
};

export const getTriler = async ({ id, API_KEY }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  const link = response.json();
  return link;
};

export const getMovies = async ({
  API_KEY,
  popularity,
  score,
  genre,
  year,
}) => {
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US${
    popularity !== '' ? `&sort_by=${popularity}` : '&sort_by=popularity.desc'
  }&include_adult=true&include_video=false&page=1&vote_count.gte=30${
    score ? `&vote_average.gte=${score - 3}&vote_average.lte=${score}` : ''
  }&with_genres=${genre}${
    year
      ? `&release_date.lte=${year}-01-01&release_date.gte=${year - 20}-01-01`
      : ''
  }`;
  const response = await fetch(URL);
  const movies = response.json();
  console.log(URL);
  return movies;
};
