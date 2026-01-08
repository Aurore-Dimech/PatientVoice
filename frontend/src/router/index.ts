import { createRouter, createWebHistory } from "vue-router";
import Centers from "../views/Centers.vue";
import Accueil from "../views/Accueil.vue";
import CenterDetails from "../views/CenterDetails.vue";
import Contact from "../views/Contact.vue";
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
			component: Centers,
		},
		{
		path: "/center/:id",
		name: "CenterDetails",
		component: CenterDetails,
		},
		{
			path: "/contact",
			name: "Contact",
			component: Contact,
		}
	],
});

export default router;
