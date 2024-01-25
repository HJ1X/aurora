import { Platform } from "../types";
import APIClient from "./api-client";

const PLATFORMS_ENDPOINT = "/platforms/lists/parents";

const apiClient = new APIClient<Platform>(PLATFORMS_ENDPOINT);

class PlatformService {
  public getPlatforms = () => apiClient.getAll();
}

export default new PlatformService();
