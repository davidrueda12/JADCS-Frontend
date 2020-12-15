<!-- Representa el html (Estructura) -->
<template>
  <div id="app">
    <div class="encabezado">
      <img id="logo" src="./assets/JADCSlogo.png" />
    </div>

    <nav>
      <table class="menu">
        <tr>
          <td>
            <button v-on:click="iniciar">Iniciar sesión</button>
          </td>
          <td class="comp" rowspan="3">
            <div class="main-component">
              <router-view> </router-view>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <button v-on:click="getResumen">
              Resumen Usuario
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button v-on:click="agregar_doc">
              Agregar Documento
            </button>
          </td>
        </tr>        
      </table>
    </nav>

    

    <div class="footer">
      <h2>Todos los derechos reservados</h2>
    </div>
  </div>
</template>

<!-- Representa el js (Comportamiento) -->
<script>

import Perfil from "./components/Perfil";
import Bienvenida from "./components/Bienvenida";
import SesionIniciada from './components/SesionIniciada'

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem('isAuth')
    };
  },

  methods: {
    iniciar: function () {
      let auth = localStorage.getItem('is_Auth')
      let sesion = auth.localeCompare(false)
      if (sesion==0){
        if(this.$route.name != "login"){
          this.$router.push({name:"login"});
        }
      } else{
        window.alert("Sesión ya iniciada")
      }
      },

    getResumen: function () {
      if(this.$route.name != "perfil"){
        let auth = localStorage.getItem('is_Auth')
        let sesion = auth.localeCompare(true)
        if (sesion==0){
          let username = localStorage.getItem("current_username");
          this.$router.push({
            name: "perfil",
            params: { username : username },
          });
        }else{
          window.alert("No ha iniciado sesión")
        }
      }
  
    },
    agregar_doc: function () {
      if(this.$route.name != "agregardoc"){
        let auth = localStorage.getItem('is_Auth')
        let sesion = auth.localeCompare(true)
        if (sesion==0){
          let username = localStorage.getItem("current_username");
          this.$router.push({ name: "agregardoc" });
      }else{
          window.alert("No ha iniciado sesión")
        }
      }
    },
  }, 
  beforeCreate: function () {
    localStorage.setItem('is_Auth', false)
    localStorage.setItem("current_username", "camilo24")
    this.$router.push({ name: "home"});
  }    
}

</script>

<!-- Representa el css (Estilo) -->
<style>
body {
  margin: 0 0 0 0;
}

.encabezado {
  margin: 0 0 0 0;
  background: linear-gradient(
    90deg,
    rgb(0, 36, 19) 0%,
    rgba(9, 97, 121, 0.541) 100%
  );
  height: 90px;
  padding: 0%;
}

#logo {
  width: 200px;
  position: relative;
  left: 42%;
  top: 10px;
}

nav {
  padding: 3px;
}

nav button {
  width: 130px;
  color: rgb(1, 42, 23);
  background: #a0c28fca;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}

nav button:hover {
  color: #472834;
  background: #e5e7e9;
  border: 2px solid #e5e7e9;
}

.menu{
  width: 100%;
}

.comp {
  width: 85%;
}

.main-component {
  height: 60vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: rgba(9, 97, 121, 0.541);
}

.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
