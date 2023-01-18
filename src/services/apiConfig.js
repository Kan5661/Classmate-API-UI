import axios from "axios";

let apiUrl = 'https://free-to-play-gaming-api-production.up.railway.app/'

const api = axios.create({
    baseUrl: apiUrl
})

export default api