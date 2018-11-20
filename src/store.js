import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarea: {

    },
    tareas: [{
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
      },
      {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
      },
      {
      "id": 4,
      "title": "et porro tempora",
      "completed": true
      },
      {
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
      },
      {
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
      }]

  },
  getters: {
    TODOS: state => {
      return state.tarea;
    },
    TODOS: state => {
      return state.tareas;
    }
  },
  mutations: {
    ADD_TODO: (state, payload) => {
        state.tareas.push(payload);    
    },
    DELETE_TODO: (state, payload) => {
      state.tareas.splice(state.tareas.findIndex( find => { return find.id == payload.id }), 1)
    },
    CHANGE_STATUS:(state, payload) => {
      let item = state.tareas.find( find => { return find.id == payload.id });
      item.completed = !item.completed
    }
  },
  actions: {
    NEW_TODO(context, payload){
      let { data } =  new Promise(function(resolve, reject) {
        context.commit('ADD_TODO', payload)
      });
      return data;
    },
    REMOVE_TODO(context, payload){
      let { data } =  new Promise(function(resolve, reject) {
        context.commit('DELETE_TODO', payload)
      });
      return data;
    },
    STATUS_TODO(context, payload){
      let { data } =  new Promise(function(resolve, reject) {
        context.commit('CHANGE_STATUS', payload)
      });
      return data;
    }
  }
})
