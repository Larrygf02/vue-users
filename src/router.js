import Vue from 'vue';
import Router from 'vue-router';
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import store from './store';
Vue.use(Router)

const routes = [
    { path: '/login', component: Login},
    { path: '/welcome', component: Welcome}
]

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const { path } = to;
    let isLogin = store.getters["user/isLogin"]
    if (path == '/login') {
      if (isLogin) {
        router.push({path: '/welcome'})
      }else{
        next();
      }
    } else {
      if (isLogin) {
        next();
      } else {
        console.log('No tiene permiso');
        router.push({ path: '/login' });
      }
    }
});

export default router;

