// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import App from './App'

// import seller from 'components/seller/seller'
// import goods from 'components/goods/goods'
// import ratings from 'components/ratings/ratings'

const seller = () => import('components/seller/seller')
const goods = () => import('components/goods/goods')
const ratings = () => import('components/ratings/ratings')

import 'common/stylus/index.styl'

Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(VueLazyLoad)

const routes = [
	{ path: '/', redirect: '/goods' },
	{ path: '/seller', component: seller },
	{ path: '/goods', component: goods },
	{ path: '/ratings', component: ratings }
];


const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
	router,
	store,
	template: '<App/>',
	components: { App }
}).$mount('#app');

