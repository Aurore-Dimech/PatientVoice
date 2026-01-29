<template>
    <div class="bg-gray-50 min-h-screen p-8">

        <RouterLink to="/centers"
            class="mb-6 flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100
                   focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none focus-visible:border-none">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux centres
        </RouterLink>

        <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-2">Nom</h1>
            <div class="flex items-center text-gray-600 mb-2">
                <svg class="w-5 h-5 mr-2 text-cyan-700" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
                Ville, CP
            </div>
            <p class="text-gray-600 mb-4">Adresse</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Services proposés</h2>
            <div class="flex flex-wrap gap-4">
                <button v-for="service in services" :key="service" type="button" tabindex="0"
                    class="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-lg font-semibold focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
                    aria-label="Service proposé : {{ service }}">
                    {{ service }}
                </button>
            </div>
        </div>


        <div class="bg-white border border-gray-200 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Localisation</h2>
            <div class="bg-cyan-50 border border-cyan-100 rounded-lg flex flex-col items-center justify-center h-48">
                <svg class="w-12 h-12 text-cyan-700 mb-2" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span class="text-gray-600">(la map)</span>
            </div>
        </div>

        <Button :to="`/form/${route.params.id}`" size="lg" variant="primary" block
            aria-label="Accéder au formulaire pour ce centre">
            Accéder au formulaire
        </Button>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
// @ts-expect-error import
import Button from './components/Button.vue';
const route = useRoute();
const services = [
    "Kinésithérapie",
    "Rééducation neurologique",
    "Rééducation orthopédique",
    "Ergothérapie",
    "Balnéothérapie",
    "Réentrainement à l’effort",
    "Suivi post-opératoire"
];
</script>
