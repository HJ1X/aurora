import httpService from "../services/http-service";
import useData from "./useData";

const usePlatforms = () => {
  const { data, error, isLoading } = useData({
    dataFetcher: httpService.getPlatformsList.bind(httpService),
  });

  return {
    platforms: data,
    error,
    isLoading,
  };
};

export default usePlatforms;
