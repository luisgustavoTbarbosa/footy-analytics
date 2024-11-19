import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://football-highlights-api.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_TOKEN,
    'x-rapidapi-host': 'football-highlights-api.p.rapidapi.com',
  },
})
