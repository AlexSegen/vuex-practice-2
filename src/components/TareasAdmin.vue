<template>
  <div>
    <h1>About</h1>
    <hr>
    <div>
      <input type="text" v-model="tarea.title"> <button type="button" @click="addItem()">Add</button>
    </div>
    <ul>
      <li v-for="item in tareas" :key="item.id">
        <small>[ID: {{ item.id }} ] </small><span :class="item.completed ? 'done':''"> {{ item.title }} </span>
        <button type="button" @click="deleteItem(item)">❌</button>
        <button type="button" 
        @click="changeStatus(item)"
        v-text="item.completed ? '✅':'⚪'"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import randomID from '@/randomID'
export default {
  name:'tareas',
  data(){
    return {
      tarea: {
          id: randomID.generate(),
          completed: false,
          title: ''
      }
    }
  },
  computed: {
    tareas () {
	    return this.$store.state.tareas
    }
  },
  mounted(){
    
  },
  methods: {
    addItem(){

      this.$store.dispatch("NEW_TODO", this.tarea).then(() => {
          this.tarea = {
            id: randomID.generate(),
            completed: false,
            title: ''
        }
      });
    },
    deleteItem(key){
      this.$store.dispatch("REMOVE_TODO", key).then(() => {
          console.log('Deleted');
      });
    },
    changeStatus(key){

      this.$store.dispatch("STATUS_TODO", key).then(() => {
          console.log('Updated');
      });
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
