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
            <button v-on:click="init" v-if="is_auth">Inicio</button>
          </td>
        </tr>
        <tr>
          <td>
            <button v-on:click="resumen_usuario" v-if="is_auth">
              Resumen Usuario
            </button>
          </td>
        </tr>
      </table>
    </nav>

    <div class="main-component">
      <router-view> </router-view>
    </div>

    <div class="footer">
      <h2>Todos los derechos reservados</h2>
    </div>
  </div>
</template>

<!-- Representa el js (Comportamiento) -->
<script>

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  methods: {
    init: function () {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username: username } });
      }
    },

    getResumen: function () {
      if (this.$route.name != "resumen") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "resumen",
          params: { username: username },
        });
      }
    },
  },

  beforeCreate: function () {
    localStorage.setItem("current_username", "camilo24");
    localStorage.setItem("isAuth", true);
    this.$router.push({ name: "user", params: { username: "camilo24" } });
  },
};
</script>

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

#Perfil {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
