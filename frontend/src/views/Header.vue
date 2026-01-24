<template>
  <header class="bg-white border-b-2 border-gray-200 w-full">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <RouterLink
          to="/"
          aria-label="Retour à l'accueil"
          class="focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:shadow-none rounded transition-colors"
        >
          <img
            src="@/assets/PatientVoice-logo.png"
            alt="Logo du site PatientVoice"
            class="h-10 w-auto"
          />
        </RouterLink>
      </div>

      <!-- Burger menu button -->
      <button
        class="md:hidden p-2 rounded transition-colors
               focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
        @click="isMenuOpen = !isMenuOpen"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="main-navigation"
        aria-label="Ouvrir le menu de navigation"
      >
        <span aria-hidden="true">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </span>
      </button>

      <nav
        id="main-navigation"
        aria-label="Navigation principale"
        class="flex-col md:flex-row md:flex items-center space-y-2 md:space-y-0 md:space-x-4
               absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-50"
        :class="isMenuOpen ? 'flex' : 'hidden md:flex'"
      >
        <RouterLink
          to="/"
          class="flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-colors
                 text-gray-800 hover:bg-gray-100 hover:text-gray-800
                 focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
          active-class="bg-cyan-700 text-white"
          @click="closeMenu"
        >
          Accueil
        </RouterLink>
        <RouterLink
          to="/centers"
          class="flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-colors
                 text-gray-800 hover:bg-gray-100 hover:text-gray-800
                 focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
          active-class="bg-cyan-700 text-white"
          @click="closeMenu"
        >
          Les centres
        </RouterLink>
        <RouterLink
          to="/contact"
          class="flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-colors
                 text-gray-800 hover:bg-gray-100 hover:text-gray-800
                 focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
          active-class="bg-cyan-700 text-white"
          @click="closeMenu"
        >
          Contact
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const closeMenu = () => { isMenuOpen.value = false }
</script>