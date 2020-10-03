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
