<template>
    <div>
        <h1>Acá se inicia sesion </h1>
        <button v-on:click="init">Iniciar sesión</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function(){
            return {
                username: ""
        }
        },
         methods: {
             init: function () {
                 let auth = localStorage.getItem('is_Auth')
                 let sesion = auth.localeCompare(false)
                if(sesion==0){
                    // let usuario = blablabla
                    // if usuario exite
                    //   if contraseña correcta
                    localStorage.setItem("current_username","batman");
                    localStorage.setItem('is_Auth', true)
                    this.$router.push({name:"sesionIn"});
                }
            }
        }
    }

</script>

<style>

</style>