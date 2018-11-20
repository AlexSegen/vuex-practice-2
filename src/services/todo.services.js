import $http from './config'

let RESOURCE_NAME = '/todos'

export default {
    getAll(){
        return $http.get(RESOURCE_NAME);
    },
    post(payload){
        return $http.post(RESOURCE_NAME, payload)
    },
    delete(payload){
        return $http.delete(`${RESOURCE_NAME}/${payload.id}`);
    },
    updateStatus(payload){
        payload.completed = !payload.completed
        return $http.put(`${RESOURCE_NAME}/${payload.id}`, payload);
    }
}