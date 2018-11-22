import $http from './config'

let RESOURCE_NAME = '/todos'

export default {
    getAll(){
        try {
            return $http.get(RESOURCE_NAME);
        }
        catch (e) {
            return console.log(e);
        }
        
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