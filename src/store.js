import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/todo.services'
import Auth from '@/auth'
import auth from './auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarea: null,
    tareas: [],
    loading: null,
    loggedIn: false,
    user: null
  },
  getters: {
    USER: state => {
      return state.user
    },
    LOGGEDIN: state => {
      return state.loggedIn
    },
    TODOS: state => {
      return state.tarea;
    },
    TODOS: state => {
      return state.tareas;
    }
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload;
    },
    SET_AUTH: (state, payload) => {
      state.loggedIn = payload;
    },
    LOADING: (state, payload) => {
      state.loading = payload;
    },
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
      let item = state.tareas.find( find => { return find.id == payload.id });
      item.completed = !item.completed
    }
  },
  actions: {
    LOGIN: async(context, payload) => {
      context.commit("LOADING", true)
      return await auth.login(payload).then(response => {
        context.commit("SET_USER", response.data.user);
        context.commit("SET_AUTH", true);
        context.commit("LOADING", false)
        localStorage.setItem('session', JSON.stringify(response.data));
      });
    },
    CHECK_AUTH: (context, payload) => {
      let session = localStorage.getItem("session");
      if(session == null) {
        context.commit("SET_AUTH", false);
      } else {
        let auth = JSON.parse(localStorage.getItem('session'));
        if(auth.auth){
          context.commit("SET_AUTH", true);
          context.commit("SET_USER", auth.user);
        } else {
          context.commit("SET_AUTH", false);
        }
      }
    },
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
