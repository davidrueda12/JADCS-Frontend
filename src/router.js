import vueRouter from 'vue-router'
import Perfil from './components/Perfil'
import Bienvenida from './components/Bienvenida'
import IniciarSesion from './components/IniciarSesion'
import SesionIniciada from './components/SesionIniciada'
import AgregarDoc from './components/AgregarDoc'
import App from'./App'

const router = new vueRouter({
    mode:'history',
    base: __dirname,
    routes:[
        {
            path: '/',
            name: "root",
            component: App  
        },
        {
            path: '/inicio',
            name: "home",
            component: Bienvenida
        },
        {
            path: '/sesion',
            name: "login",
            component: IniciarSesion
        },
        {
            path: '/usuario',
            name: "sesionIn",
            component: SesionIniciada
        },        
        {
            path: '/usuario/perfil/:username',
            name: "perfil",
            component: Perfil
        },
        {
            path: '/documento/agregar',
            name: "agregardoc",
            component: AgregarDoc
        },
    ]
})
export default router