<template>
    <ul>
      <li v-for="item in tareas" :key="item.id">
        <small>[ID: {{ item.id }} ] </small><span :class="item.completed ? 'done':''"> {{ item.title }} </span>
      </li>
    </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name:'ListaTareas',
  computed: {
    tareas () {
	    return this.$store.state.tareas
    },
    //...mapGetters(["TODOS"])
  },
  mounted(){
      
  }
}
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
