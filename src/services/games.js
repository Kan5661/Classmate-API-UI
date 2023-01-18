import api from './apiConfig.js'

export const getGames = async () => {
    try {
        const response = await api.get("/")
        return response
    }
    catch (error) {
        throw error
    }
}

