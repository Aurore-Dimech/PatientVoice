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
            <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ center.name }}</h1>
            <div class="flex items-center text-gray-600 mb-2">
                <svg class="w-5 h-5 mr-2 text-cyan-700" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
                <!-- {{ center.cityZip }} -->
                  TODO Ville & CityZip
            </div>
            <!-- <p class="text-gray-600 mb-4">{{ center.address }}</p> -->
            <p class="text-gray-600 mb-4">TODO Adresse</p>
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
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Carte de localisation</h2>
            <p class="mb-2" id="map-desc">
                Centre situé au {{ center.address }}, {{ center.cityZip }}.
            </p>
            <div v-if="mapCenter" style="height: 200px; border-radius: 0.75rem; overflow: hidden;">
                <l-map :zoom="15" :center="mapCenter" aria-describedby="map-desc" role="region"
                    aria-label="Carte de localisation du centre" tabindex="0" style="height: 100%; width: 100%;">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors" />
                    <l-marker :lat-lng="mapCenter" />
                </l-map>
            </div>
            <div v-else>
                <p>Chargement de la carte…</p>
            </div>
        </div>

        <Button :to="`/form/${centerId}`" size="lg" variant="primary" block
            aria-label="Accéder au formulaire pour ce centre">
            Accéder au formulaire
        </Button>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { useRoute } from 'vue-router';
// @ts-expect-error import
import Button from './components/Button.vue';
const route = useRoute();
const centerId = route.params.id;
const getCenterFromId = async (uuid: any): Promise<any> => {
    const response = await fetch(`https://patientvoice-backend.onrender.com/centers/${uuid}`);
    const data = await response.json()
    console.log(data)
    return data;
};
const center = await getCenterFromId(centerId);
console.log(center);
const services = [
    "Kinésithérapie",
    "Rééducation neurologique",
    "Rééducation orthopédique",
    "Ergothérapie",
    "Balnéothérapie",
    "Réentrainement à l’effort",
    "Suivi post-opératoire"
];

const center = ref({
    name: "Nom",
    address: "15 rue du louvre",
    cityZip: "75001 Paris"
})

const mapCenter = ref<[number, number] | null>(null)

onMounted(async () => {
    const address = `${center.value.address}, ${center.value.cityZip}`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
        mapCenter.value = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } else {
        // une valeur par défaut si l'adresse est pas trouvée
        mapCenter.value = [48.8566, 2.3522];
    }
});
</script>
