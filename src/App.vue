<!-- Representa el html (Estructura) -->
<template>
  <div id="app">
    <div class="encabezado">
      <img id="logo" src="./assets/JADCSlogo.png" />
    </div>

    <table id="tComponentes">
      <tr>
        <td>
          <nav>
            <table>
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
              <tr>
                <td>
                  <button v-on:click="agregar_doc" v-if="is_auth">
                    Agregar Documento
                  </button>
                </td>
              </tr>
            </table>
          </nav>
        </td>
        <td>
          <div class="main-component">
            <!--<router-view> </router-view> -->
            <listaDoc />
            <agregarDoc />
          </div>
        </td>
      </tr>
    </table>
    <div class="footer">
      <h2>Todos los derechos reservados</h2>
    </div>
  </div>
</template>

<!-- Representa el js (Comportamiento) -->
<script>
import AgregarDoc from "./components/agregarDoc.vue";
import listaDoc from "./components/listaDoc";
export default {
  name: "App",
  components: {
    AgregarDoc,
    listaDoc,
  },
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
    agregar_doc: function () {
      pass;
    },
  },

  beforeCreate: function () {
    localStorage.setItem("current_username", "camilo24");
    localStorage.setItem("isAuth", true);
    this.$router.push({ name: "user", params: { username: "camilo24" } });
  },
};
</script>

<!-- Representa el css (Estilo) -->
<style>
body {
  margin: 0 0 0 0;
}

.encabezado {
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

nav button {
  width: 130px;
  color: rgb(1, 42, 23);
  background: #a0c28fca;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 50px;
}

nav button:hover {
  color: #472834;
  background: #e5e7e9;
  border: 2px solid #e5e7e9;
}

.main-component {
  height: 60vh;
  margin-top: 20px;
  margin-left: 40px;
  padding: 0%;
  background: #fdfefe;
  color: black;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: rgba(9, 97, 121, 0.541);
  color: rgb(29, 28, 28);
}

.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

