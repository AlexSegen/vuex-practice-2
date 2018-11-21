<template>
  <div>
    <div v-if="loading" class="loader">
      <div>🌀</div> Cargando...
    </div>

    <ol class="todo-list" v-if="tareas.length > 0">
      <li v-for="item in tareas" :key="item.id">
      <span v-text="item.completed ? '✅':'🔳'" ></span>
      <span :class="item.completed ? 'done':''"> {{ item.title }} </span>
      </li>
    </ol>
    <p v-else>No hay tareas</p>

  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ListaTareas",
  computed: {
    tareas() {
      return this.$store.state.tareas;
    },
    loading() {
      return this.$store.state.loading;
    }
    //...mapGetters(["TODOS"])
  }
};
</script>