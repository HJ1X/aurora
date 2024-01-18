import genres from "../data/genres";

const useGenres = () => {
  // NOTE: Commented out fetching genres from server.
  // const { data, error, isLoading } = useData<Genre>({
  //   dataFetcher: httpService.getGenresList.bind(httpService),
  // });

  // Returning genres statically
  return { genres: genres, error: null, isLoading: false };
};

export default useGenres;
