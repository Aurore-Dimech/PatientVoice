import { createRouter, createWebHistory } from "vue-router";
import Search from "../views/Centers.vue";
import Accueil from "../views/Accueil.vue";
import Form from "../views/FormPage.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Accueil",
			component: Accueil,
		},
		{
			path: "/centers",
			name: "Centers",
			component: Search,
		},
		{
			path: "/form/:id",
			name: "form",
			component: Form,
		},
	],
});

export default router;
