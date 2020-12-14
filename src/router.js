import vueRouter from 'vue-router'
import User from './components/User' 
import UserBalance from './components/UserBalance'
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
    ]
})
export default router