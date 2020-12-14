<template>
  <div id="app">
    <h1>JADCS</h1>
        <nav>
          <button v-on:click="init" v-if="is_auth" > Perfil </button>
        </nav>
    <img src="./assets/logo.png">
    
  </div>
</template>

<script>
import PerfilUsuario from "./components/PerfilUsuario"

export default {
  
  name: 'Perfil',
  components: {PerfilUsuario},
    data: function(){
      return {
        is_auth: localStorage.getItem('{usuario}') || false
    }
  },
  methods: {
  },
  beforeCreate: function(){
    localStorage.setItem('current_username', '{usuario}')
    localStorage.setItem('isAuth', true)
  }
}
</script>

<style>
#Perfil {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
