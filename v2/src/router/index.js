
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Repository from '../views/Repository.vue'
import Work from '../views/Work.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/news', component: News },
	{ path: '/repository', component: Repository },
	{ path: '/work', component: Work }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
