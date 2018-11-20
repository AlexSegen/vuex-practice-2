<template>
  <div>
    <h1>Tareas</h1>
    <hr>
    
    <lista-tareas/>

    <br><br><br>
    
    <gestionar-tareas/>

  </div>
</template>

<script>
import gestionarTareas from "@/components/TareasAdmin";
import ListaTareas from "@/components/ListaTareas";
export default {
  name: "about",
  components: {
    gestionarTareas,
    ListaTareas
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("GET_TODOS");
  }
};
</script>

<style>
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
  100% {
    transform: rotate(0) translateX(15px);
    opacity: 0;
  }
}
</style>
