import Vue from "vue";
import Router from "vue-router";
import AreaRouter from "./views/AreaRouter.vue";

import AdminArea from './views/_area/Admin'
import DashboardArea from './views/_area/Dashboard'
import SupervisedArea from './views/_area/Supervised'
import SupervisorArea from './views/_area/Supervisor'
import UserArea from './views/_area/User'

import Pending from './views/_area/Supervisor/Pending'

import Store from './store/index'
import store from "./store/index";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect (to) {
        return 'user'
      } 
    },
    {
      path: '/supervisor',
      component: SupervisorArea,
      beforeEnter: (to, from, next) => {
        if (!store.getters['claims/isSupervisor']) {
          next('/')
        }
        next()
      },
      children: [
        {
          path: '/',
          component: Pending
        },
        {
          path: 'pending',
          component: Pending
        }
      ]                  
    },
    {
      path: '/user',
      component: UserArea
    }


    // {
    //   path: "/:area",
    //   component: AreaRouter,
    //   props: (route) => (
    //     {
    //       area: route.params.area
    //     }
    //   )
    // },
  ]
});
