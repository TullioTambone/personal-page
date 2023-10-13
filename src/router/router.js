import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue';


const routes = [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: { transition: 'fade'}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router