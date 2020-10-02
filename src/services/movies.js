export const getMovie = async ({ id, API_KEY }) => {
  console.log({ id, API_KEY });
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const movie = response.json();
  return movie;
};
