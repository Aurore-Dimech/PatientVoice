<template>
  <footer class="bg-white border-t-2 border-gray-200 w-full">
    <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center">
      <!-- gauche -->
      <div class="flex flex-col items-start mb-8 md:mb-0">
        <div class="flex items-center mb-2">
          <img src="@/assets/PatientVoice-logo.png" alt="Logo PatientVoice" class="h-10 w-auto mr-3" />
        </div>
        <span class="text-base text-gray-500">Vos retours, leur force.</span>
      </div>
      <!-- droite-->
      <nav aria-label="Liens rapides" class="flex flex-col items-start md:items-end">
        <span class="font-semibold text-gray-800 mb-2">Liens rapides</span>
        <div class="flex flex-col space-y-1">
          <a href="/"
            class="text-gray-500 hover:underline text-base focus:outline-none focus:ring-2 focus:ring-blue-400">Accueil</a>
          <a href="/centers"
            class="text-gray-500 hover:underline text-base focus:outline-none focus:ring-2 focus:ring-blue-400">Les
            centres</a>
          <a href="/contact"
            class="text-gray-500 hover:underline text-base focus:outline-none focus:ring-2 focus:ring-blue-400">Contact</a>
        </div>
      </nav>
    </div>
    <div
      class="border-t-2 border-gray-200 mx-7 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <span>© 2026 PatientVoice. Tous droits réservés.</span>
      <div class="flex space-x-4 mt-2 md:mt-0">
        <a href="#" class="hover:underline">Politique de confidentialité</a>
        <a href="#" class="hover:underline">Conditions d’utilisation</a>
        <a href="#" class="hover:underline">Accessibilité</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>