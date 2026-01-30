<template>
  <footer class="bg-white border-t-2 border-gray-200 w-full">
    <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
      <!-- gauche -->
      <div class="flex flex-col items-start mb-8 md:mb-0">
        <div class="flex items-center mb-2">
          <RouterLink
            to="/"
            aria-label="Retour à l'accueil"
            class="focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:shadow-none rounded transition-colors"
          >
            <img src="@/assets/PatientVoice-logo.png" alt="Logo PatientVoice" class="h-10 w-auto mr-3" />
          </RouterLink>
        </div>
        <span class="text-base text-gray-500">Vos retours, leur force.</span>
      </div>
      <!-- droite-->
      <nav aria-label="Liens rapides" class="flex flex-col items-start md:items-end">
        <span class="font-semibold text-gray-800 mb-2">Liens rapides</span>
        <div class="flex flex-col space-y-1">
          <RouterLink
            to="/"
            class="text-gray-500 hover:underline text-base rounded transition-colors
                   focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
          >Accueil</RouterLink>
          <RouterLink
            to="/centers"
            class="text-gray-500 hover:underline text-base rounded transition-colors
                   focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
          >Les centres</RouterLink>
          <RouterLink
            to="/contact"
            class="text-gray-500 hover:underline text-base rounded transition-colors
                   focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none"
          >Contact</RouterLink>
        </div>
      </nav>
    </div>
    <div
      class="border-t-2 border-gray-200 mx-7 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <span>© 2026 PatientVoice. Tous droits réservés.</span>
      <div class="flex space-x-4 mt-2 md:mt-0">
        <a href="#" class="hover:underline rounded transition-colors
          focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none">
          Politique de confidentialité
        </a>
        <a href="#" class="hover:underline rounded transition-colors
          focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none">
          Conditions d’utilisation
        </a>
        <a href="#" class="hover:underline rounded transition-colors
          focus-visible:outline-yellow-300 focus-visible:outline-4 focus-visible:bg-yellow-300 focus-visible:text-black focus-visible:shadow-none">
          Accessibilité
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>