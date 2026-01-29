import { createRouter, createWebHistory } from "vue-router";
import Centers from "../views/Centers.vue";
import Accueil from "../views/Accueil.vue";
import CenterDetails from "../views/CenterDetails.vue";
import Contact from "../views/Contact.vue";
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
		},
		{
			path: "/form/:id",
			name: "Form",
			component: Form,
		}
	],
	scrollBehavior() {
		return { top: 0 }
  }
});

router.afterEach(() => {
  // On retire le focus de l’élément actif
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  // On met temporairement un tabindex sur le body pour pouvoir lui donner le focus
  document.body.setAttribute('tabindex', '-1');
  document.body.focus();
  setTimeout(() => document.body.removeAttribute('tabindex'), 100);
});

export default router;
