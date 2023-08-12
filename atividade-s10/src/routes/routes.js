import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/about/AboutUs.vue'
import Home from '../views/home/HomeScreen.vue'
import Talent from '../views/talent/NewTalent.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/sobre',
            name: 'About',
            component: About
        },
        {
            path:'/cadastro',
            name: 'Talent',
            component: Talent
        }
    ]
})

export default router