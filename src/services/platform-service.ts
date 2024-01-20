import { Platform } from "../types";
import httpService from "./http-service";

const PLATFORMS_ENDPOINT = "/platforms/lists/parents";

class PlatformService {
  public getPlatforms = () =>
    httpService.getData<Platform>(PLATFORMS_ENDPOINT).then((res) => res.data);
}

export default new PlatformService();
