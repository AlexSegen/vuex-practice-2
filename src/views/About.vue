<template>
  <div>
    <h1>About</h1>
    <hr>
    
    <lista-tareas/>


    <br><br><br>
    <hr>

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
  computed: {
    tareas () {
	    return this.$store.state.tareas
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
