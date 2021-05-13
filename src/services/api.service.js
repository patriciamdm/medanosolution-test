import axios from 'axios'

const apiHandler = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})


export default apiHandler