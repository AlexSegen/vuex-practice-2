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
import gestionarTareas from '@/components/TareasAdmin'
import ListaTareas from '@/components/ListaTareas'
export default {
  name:'about',
  components:{
    gestionarTareas,
    ListaTareas
  },
  data(){
    return {}
  },
  mounted(){
    this.$store.dispatch("GET_TODOS");
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
