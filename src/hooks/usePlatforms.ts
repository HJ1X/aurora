import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platform-service";
import platforms from "../data/platforms";

const QUERY_KEY_PLATFORMS = ["platforms"];

const usePlatforms = () => {
  return useQuery({
    queryKey: QUERY_KEY_PLATFORMS,
    queryFn: () => platformService.getPlatforms(),
    staleTime: 24 * 60 * 60 * 1_000, // 24h
    initialData: platforms,
  });
};

export default usePlatforms;
