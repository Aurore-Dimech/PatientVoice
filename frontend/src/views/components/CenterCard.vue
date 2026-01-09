<template>
  <div class="border-2 border-cyan-700/10 rounded-xl p-6 flex flex-col bg-white">
    <img
      :src="image"
      :alt="`Photo du ${name}`"
      class="w-full h-36 object-cover rounded-md mb-4"
    />
    <h3 class="text-xl font-bold text-gray-800 mb-1">{{ name }}</h3>
    <p class="text-gray-600 mb-1">{{ address }}</p>
    <p class="text-gray-600 mb-4">{{ cityZip }}</p>
    <RouterLink
      :to="`/center/${id}`"
      class="w-full bg-cyan-700 text-white font-semibold py-2 rounded-lg mt-auto hover:border-2 hover:bg-white hover:text-cyan-700 text-center"
    >
      Détailler
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  id: [String, Number],
  name: String,
  address: String,
  cityZip: String,
  image: String
})
</script>