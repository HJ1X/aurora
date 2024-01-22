import usePlatforms from "./usePlatforms";

const usePlatformId = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find((platform) => platform.id === platformId);
};

export default usePlatformId;
