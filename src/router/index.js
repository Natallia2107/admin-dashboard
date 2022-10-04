import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import(`./../templates/LoginTemplate`),
	},
	{
		path: '/',
		component: () => import(`./../templates/DashboardTemplate`),
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: () => import(`./../views/Dashboard`),
			},
			{
				path: '/profile',
				name: 'About',
				component: () => import(`./../views/Profile`),
			},
			{
				path: '/diagram',
				name: 'About',
				component: () => import(`./../views/Diagram`),
			},
			{
				path: '/help',
				name: 'About',
				component: () => import(`./../views/Help`),
			},
			{
				path: '/settings',
				name: 'About',
				component: () => import(`./../views/Settings`),
			},
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
