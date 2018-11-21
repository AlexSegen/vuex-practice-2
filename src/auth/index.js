import axios from 'axios';

const http = axios.create({
    baseURL: 'https://mynotesapp2018.herokuapp.com/api',
    timeout: 5000,
    headers: {}
});


export default {

    login(payload){
        return http.post('/auth/login', payload)
    }

}



