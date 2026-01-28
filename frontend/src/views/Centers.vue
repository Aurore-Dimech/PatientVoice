<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <div class="mb-10 text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-4" aria-label="Parcourir les centres">Parcourir les centres</h2>
      <p class="text-xl text-gray-500">
        Et faire entendre votre voix..
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <CenterCard
        v-for="(center, idx) in centers"
        :key="center.id"
        :id="center.id"
        :name="center.name"
        :address="center.address"
        :cityZip="center.cityZip"
        :image="center.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-expect-error import
import CenterCard from './components/CenterCard.vue'
import mockData from '../assets/mockData'
import type { Center } from '@/assets/typings';


const centers = ref<Array<Center>>([])

const getCenters = async () => {
  // const response = await fetch('http://localhost:3000/centers')
  const data = mockData
  centers.value = data.Centres
  // const data = await response.json()
  console.log(data)
}
getCenters()

</script>