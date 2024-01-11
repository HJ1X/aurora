import httpService, { Genre } from "../services/http-service";
import useData from "./useData";

const useGenres = () => {
  const { data, error, isLoading } = useData<Genre>({
    dataFetcher: httpService.getGenresList.bind(httpService),
  });

  return { genres: data, error, isLoading };
};

export default useGenres;
