import axios from 'axios'
// https://api.themoviedb.org/3
// /movie/now_playing?api_key=f4e9a33159d71f1ff555b88514e21891&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;