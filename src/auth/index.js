import axios from 'axios';
import store from '../store'
import { error } from 'util';

const http = axios.create({
    baseURL: 'https://mynotesapp2018.herokuapp.com/api',
    timeout: 5000,
    headers: {}
});


export default {

    login(payload){
        try {
            return http.post('/auth/login', payload)
        } 
        catch {
            store.commit('LOADING', false);
            return error
        }
    },
    logout(){
        try {
            store.commit('SET_AUTH', false);
            localStorage.removeItem('session');
        } catch {
            return error
        }
    }

}



