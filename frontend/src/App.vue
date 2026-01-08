<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
</script>

<template>
  <a
    href="#main-content"
    class="
      sr-only
      focus:not-sr-only
      focus:fixed
      focus:top-0
      focus:left-0
      focus:bg-cyan-700
      focus:text-white
      focus:p-2
      focus:z-50
      focus:text-center
      focus:text-base
      focus:font-semibold
      focus:outline-none
    "
  >
    Accéder au contenu principal
  </a>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main id="main-content" class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
