<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

