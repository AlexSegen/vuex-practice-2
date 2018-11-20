import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/todo.services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarea: {

    },
    tareas: []

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
    SET_TODOS: (state, payload) => {
      state.tareas = payload;
    },
    ADD_TODO: (state, payload) => {
        state.tareas.push(payload);    
    },
    DELETE_TODO: (state, payload) => {
      state.tareas.splice(state.tareas.findIndex( find => { return find.id == payload.id }), 1)
    },
    CHANGE_STATUS:(state, payload) => {
      /* let item = state.tareas.find( find => { return find.id == payload.id });
      item.completed = !item.completed */
    }
  },
  actions: {
    GET_TODOS: (context) => {
        return Api.getAll().then(response => {
          context.commit("SET_TODOS", response.data);
        })
    },
    NEW_TODO(context, payload){
      return Api.post(payload).then(response => {
        context.commit('ADD_TODO', response.data);
      });
    },
    REMOVE_TODO(context, payload){
      return Api.delete(payload).then(() => {
        context.commit('DELETE_TODO', payload);
      });
    },
    STATUS_TODO(context, payload){
      payload.completed = !payload.completed
      return Api.updateStatus(payload);
    }
  }
})
