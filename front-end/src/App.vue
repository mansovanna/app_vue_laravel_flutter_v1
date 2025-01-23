<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useActionStore } from './stores/action';
const darkMode = useActionStore();
darkMode.initialize();
</script>

<template>


  <RouterView />
</template>
