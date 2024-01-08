import axios from "axios";

const RAWG_API_KEY = "824eede8fe32431595a0b6b76b62855d";
const BASE_URL = "https://api.rawg.io/api";

export default axios.create({
  params: {
    key: RAWG_API_KEY,
  },
  baseURL: BASE_URL,
});
