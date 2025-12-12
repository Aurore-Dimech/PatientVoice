import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "App",
			component: Accueil,
		},
	],
});

export default router;
