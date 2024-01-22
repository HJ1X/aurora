import useGenres from "./useGenres";

const useGenreId = (genreId?: number) => {
  const { data: genres } = useGenres();
  return genres.results.find((genre) => genre.id === genreId);
};

export default useGenreId;
