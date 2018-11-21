<template>
  <div>
    <h1>Admin Tareas</h1>
    <hr>
    <div>
      <input type="text" placeholder="Nueva tarea" v-model="tarea.title" @keydown.enter="addItem()"> <button type="button" @click="addItem()">Add</button>
    </div>
    <span id="sys-msg" class="sys-msg" v-if="success"
    :class="success ? 'success':'error'"
    v-text="success ? '😁 Tarea agregada':'😓 Hubo un Error'">
    </span>
    
    <div v-if="loading" class="loader">
      <div>🌀</div> Cargando...
    </div>

    <ul class="todo-list-none" v-if="tareas.length > 0">
      <li v-for="item in tareas" :key="item.id">
        <button type="button" @click="deleteItem(item)">❌</button>
        <button type="button" 
        @click="changeStatus(item)"
        v-text="item.completed ? '✅':'🔳'"></button> | <span :class="item.completed ? 'done':''"> {{ item.title }} </span>
      </li>
    </ul>
    <p v-else>No hay tareas</p>      

  </div>
</template>

<script>
import randomID from '@/randomID'
export default {
  name:'tareas',
  data(){
    return {
      success: false,
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
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  mounted(){
    
  },
  methods: {
    addItem(){
      if(this.tarea.title.toString().trim() == '')
      return false
      this.$store.dispatch("NEW_TODO", this.tarea).then(() => {
        this.success = true;
          this.tarea = {
            //id: randomID.generate(),
            completed: false,
            title: ''
        }
        setTimeout(() => {
              this.success = false;
        }, 3000);
      }).catch(error => {
        this.$store.commit("LOADING", false);
        this.success = false;
        console.log(error)
      });
    },
    deleteItem(key){
      //if(confirm('¿Seguro?'))
      this.$store.dispatch("REMOVE_TODO", key).catch(error => {
        this.$store.commit("LOADING", false);
      });
    },
    changeStatus(key){
      this.$store.dispatch("STATUS_TODO", key);
    }
  }
}
</script>

<style scoped>
.todo-list-none{
  list-style: none;
  margin: 10px 0;
}
</style>
