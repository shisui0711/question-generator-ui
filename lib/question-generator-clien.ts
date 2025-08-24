import axios from 'axios'

export const getClient = async (token?: string) => {
    return axios.create({
        baseURL: process.env.BASE_API_URL || "http://localhost:8000",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type" : "application/json"
        }
    })
}