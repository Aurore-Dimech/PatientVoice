<template>
  <header class="bg-white border-b-2 border-gray-200 w-full">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img
          src="@/assets/PatientVoice-logo.png"
          alt="PatientVoice – plateforme de centres de rééducation"
          class="h-10 w-auto"
        />
      </div>

      <!-- Navigation -->
      <nav aria-label="Navigation principale" class="flex items-center space-x-4">

        <RouterLink
          to="/"
          class="flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-colors
                 text-gray-800 hover:bg-gray-100 hover:text-gray-800
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          active-class="bg-cyan-700 text-white"
        >
          Accueil
        </RouterLink>

        <RouterLink
          to="/centers"
          class="flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-colors
                 text-gray-800 hover:bg-gray-100 hover:text-gray-800
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          active-class="bg-cyan-700 text-white"
        >
          Les centres
        </RouterLink>

        <RouterLink
          to="/contact"
          class="flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-colors
                 text-gray-800 hover:bg-gray-100 hover:text-gray-800
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          active-class="bg-cyan-700 text-white"
        >
          Contact
        </RouterLink>

      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>