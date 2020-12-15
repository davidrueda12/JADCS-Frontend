<template>
    <div>
        <h2>Agregar documento</h2>
        <h3>acá <span> {{username}} </span> agrega documentos </h3>

    </div>
</template>

<script>
    export default {
        name: "Sesion",
        data:function(){
            return {
                username: ""
        }
        },
         methods: {
           
         },

        created: function(){
            this.username = localStorage.getItem("current_username")            
            },        
    }
</script>

<style>

</style>