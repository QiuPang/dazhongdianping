import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Order from '@/components/order/Order';
import Discover from '@/components/discover/Discover';
import Profile from '@/components/profile/Profile';
import Login from '@/components/profile/Login';
import Register from '@/components/profile/Register';
import Privateinfo from '@/components/profile/Privateinfo';
import Shopaddress from '@/components/profile/Shopaddress';
import Goodslist from '@/components/index/goodslist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/privateinfo',
      name: 'Privateinfo',
      component: Privateinfo
    },
    {
      path: '/shopaddress',
      name: 'Shopaddress',
      component: Shopaddress
    },
    {
      path: '/goodslist',
      name: 'Goodslist',
      component: Goodslist
    }
  ]
})
