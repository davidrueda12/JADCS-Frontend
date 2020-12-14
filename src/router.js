import vueRouter from 'vue-router'
import PerfilUsuario from './components/PerfilUsuario'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        
        {
            path: '/usuario/perfil/:username',
            name: "perfil_usuario",
            component: PerfilUsuario
        },
    ]
})
        export default router