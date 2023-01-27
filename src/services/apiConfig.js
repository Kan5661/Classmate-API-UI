import axios from "axios";

const api = axios.create({
  baseURL: 'https://free-to-play-gaming-api-production.up.railway.app/'
});

export default api;