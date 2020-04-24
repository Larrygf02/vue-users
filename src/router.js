import Vue from 'vue';
import Router from 'vue-router';
import Login from './pages/Login'
import Welcome from './pages/Welcome'
Vue.use(Router)

const routes = [
    { path: '/login', component: Login},
    { path: '/welcome', component: Welcome}
]

const router = new Router({
    mode: 'history',
    routes
});

export default router;

