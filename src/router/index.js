import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import(`./../templates/LoginTemplate`),
	},
	{
		path: '/',
		component: () => import(`./../templates/DashboardTemplate`),
		children: [
			{
				path: '/dashboard',
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
				path: '/notification',
				name: 'About',
				component: () => import(`./../views/Notification`),
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
