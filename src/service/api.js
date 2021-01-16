import axios from 'axios'

const api = axios.create({
  baseURL: 'https://5ffcdd9ba77c50001706cc3c.mockapi.io/api/users'
})

export default api
