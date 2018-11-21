<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a v-if="!loggedIn" href="javascript:void(0)" @click="login()">Login</a> 
      <template v-if="loggedIn">
        <span>{{user.user.name}}</span> <a href="javascript:void(0)" @click="logout()">(Salir)</a>
      </template>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Auth from '@/auth'
export default {
  name: 'App',
  data(){
    return {
      payload: {
        email: 'avivas@mail.com',
        password: '123456'
      }
    }
  },
  computed:{
    loggedIn(){
      return this.$store.state.loggedIn
    },
    user(){
      return this.$store.state.user
    }
  },
  methods: {
    login(){
      let payload = this.payload;
      this.$store.dispatch('LOGIN', payload).then(() => {
        console.log('Logged in!');
      })
    },
    logout(){
      this.$store.commit('SET_AUTH', false);
    }
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 800px;
  margin: 20px auto;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.loader {
  color: #999;
}
.loader div {
  margin: 0 auto;
  display: inline-block;
  animation: spin 2s infinite 0s linear;
}
@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
