<template>
  <div>
    <h1>Tareas</h1>
    <span>Todas: {{ TODOS.length }} / Pendientes: {{ PENDING_TODOS }} / Terminadas: {{ COMPLETED_TODOS }} </span>
    <hr>
    <span id="sys-msg" class="sys-msg error" v-if="error" v-text="'😓 Error de conexión'">
    </span>
    <lista-tareas/>

    <br><br><br>
    
    <gestionar-tareas v-if="loggedIn"/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import gestionarTareas from "@/components/TareasAdmin";
import ListaTareas from "@/components/ListaTareas";
export default {
  name: "about",
  components: {
    gestionarTareas,
    ListaTareas
  },
  data() {
    return {
      error:''
    };
  },
  computed:{
    ...mapGetters(['TODOS','COMPLETED_TODOS','PENDING_TODOS']),
    loggedIn(){
      return this.$store.state.loggedIn
    }
  },
  mounted() {
    this.error = false;
    this.$store.dispatch("GET_TODOS").catch(error => {
      this.$store.commit("LOADING", false);
      this.error = true;
      console.log(error);
    });
  }
};
</script>

<style>
h1 small {
  font-size: 14px;
  font-weight: normal;
}
button {
  cursor: pointer;
  background: transparent;
  border: none;
  box-shadow: unset;
  padding: 0;
}
.done {
  text-decoration: line-through;
}
.todo-list li:last-child {
  animation: slideIn 0.2s forwards 0s ease-in-out;
}

.sys-msg {
  display: inline-block;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 3px;
  margin: 5px 0;
  animation: slideInOut 3s forwards 0s ease-in-out;
}

.sys-msg.success {
  color: green;
  border: 1px solid green;
}

.sys-msg.error {
  color: red;
  border: 1px solid red;
}

.slideOut {
  animation: slideOut 0.2s forwards 0s ease-in-out;
}

@keyframes slideIn {
  0% {
    transform: rotate(0) translateX(15px);
    opacity: 0;
  }
  100% {
    transform: rotate(0) translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: rotate(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: rotate(0) translateX(15px);
    opacity: 0;
  }
}

@keyframes slideInOut {
  0% {
    transform: rotate(0) translateX(15px);
    opacity: 0;
  }
  25% {
    transform: rotate(0) translateX(0);
    opacity: 1;
  }
  75% {
    transform: rotate(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: rotate(0) translateX(15px);
    opacity: 0;
  }
}
</style>
