<template>
  <div class="border-2 border-cyan-700/10 rounded-xl p-6 flex flex-col bg-white">
    <img
      :src="image"
      :alt="`Photo du ${name}`"
      class="w-full h-36 object-cover rounded-md mb-4"
    />

    <p class="text-xl font-bold text-gray-800 mb-1">{{ name }}</p>
    <p class="text-gray-600 mb-1">{{ address }}</p>
    <p class="text-gray-600 mb-4">{{ cityZip }}</p>

    <Button
      :to="`/center/${id}`"
      size="md"
      variant="primary"
      block
      class="mt-auto"
      :aria-label="`Voir le détail du centre ${name}`"
    >
      Détailler
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue'

defineProps<{
  id: string
  name: string
  address: string
  cityZip: string
  image: string
}>()
</script>