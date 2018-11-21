import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    baseURL2: 'http://localhost:3001',
    timeout: 1000,
    headers: {}
});

export default instance;