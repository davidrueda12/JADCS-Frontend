<template>
    <div id="Perfil">
        <h2>Test <span>{{username}} </span></h2>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Perfil",
        data:function(){
            return {
                username: ""
        }
        },
        
        created: function(){
            this.username = this.$route.params.username
            // let self = this
            // axios.get("https://software-jadcs.herokuapp.com/usuario/perfil/" + this.username)
            // .then((result) => {
            //     self.perfil = result.data.Perfil
            //     self.nombre = self.perfil.Nombre
            //     ...

            // })
            // .catch((error) => {
            //     alert("ERROR Servidor");
            // });        
        }
    }
</script>

<style>

</style>