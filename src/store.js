import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/todo.services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarea: {},
    tareas: [],
    loading: true,
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
    LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_TODOS: (state, payload) => {
      state.tareas = payload;
      state.loading = false;
    },
    ADD_TODO: (state, payload) => {
        state.tareas.push(payload);
        state.loading = false;
    },
    DELETE_TODO: (state, payload) => {
      state.tareas.splice(state.tareas.findIndex( find => { return find.id == payload.id }), 1)
      state.loading = false;
    },
    CHANGE_STATUS:(state, payload) => {
      let item = state.tareas.find( find => { return find.id == payload.id });
      item.completed = !item.completed
      state.loading = false;
    }
  },
  actions: {
    GET_TODOS: (context) => {
        context.commit("LOADING", true)
        return Api.getAll().then(response => {
          context.commit("LOADING", false)
          context.commit("SET_TODOS", response.data);
        })
    },
    NEW_TODO(context, payload){
      context.commit("LOADING", true)
      return Api.post(payload).then(response => {
        context.commit("LOADING", false)
        context.commit('ADD_TODO', response.data);
      });
    },
    REMOVE_TODO(context, payload){
      context.commit("LOADING", true)
      return Api.delete(payload).then(() => {
        context.commit("LOADING", false)
        context.commit('DELETE_TODO', payload);
      });
    },
    STATUS_TODO(context, payload){
      context.commit("LOADING", true)
      return Api.updateStatus(payload).then(()=> {
        context.commit("LOADING", false)
      });
    }
  }
})
