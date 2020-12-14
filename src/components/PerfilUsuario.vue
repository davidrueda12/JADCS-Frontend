<template>
    <div id="PerfilUsuario">
        <h2>{{usuario}}</h2>
        <h2>Datos del usuario: <span> 
          Nombre:  {{Nombre}}
          Apellido:  {{Apellido}}
          Categoria:  {{Categoria}} </span> </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "PerfilUsuario",
    datos: function (){
        return {
            Nombre: "",
            Apellido: "",
            Categoria: "",
        }
    },
    mostrar: function(){
        this.usuario = this.$route.params.usuario
        let self = this
        axios.get("https://software-jadcs.herokuapp.com/usuario/perfil "+ this.usuario)
            .then((result) => {
                self.Nombre = result.datos.Nombre
                self.Apellido = result.datos.Apellido
                self.Categoria = result.datos.Categoria
            })
            .catch((error) => {
                alert("No se pudo cargar los datos");
            });
    }
}
</script>