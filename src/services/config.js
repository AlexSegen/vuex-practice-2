import axios from 'axios'

const instance = axios.create({
    baseURL2: 'https://jsonplaceholder.typicode.com/',
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {}
});

export default instance;