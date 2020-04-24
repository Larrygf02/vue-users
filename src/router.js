import Vue from 'vue';
import Router from 'vue-router';
import Login from './pages/Login'
Vue.use(Router)

const routes = [
    { path: '/login', component: Login}
]

const router = new Router({
    mode: 'history',
    routes
});

export default router;

