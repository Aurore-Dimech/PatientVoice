import { createRouter, createWebHistory } from "vue-router";
import Search from "../views/Search.vue";
import Accueil from "../views/Accueil.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Accueil",
			component: Accueil,
		},
		{
			path: "/search",
			name: "Search",
			component: Search,
		},
	],
});

export default router;
