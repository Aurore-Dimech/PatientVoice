<template>
    <h1>PAGE D'ACCUEIL</h1>
    <button @click="router.push({ name: 'form', params: { id: 1 } })">Go to Form</button>
</template>
<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
</script>