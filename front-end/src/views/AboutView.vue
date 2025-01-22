<script setup lang="ts">
import MainLayouts from '@/components/layouts/MainLayouts.vue';
</script>

<template>
  <MainLayouts>
    <div class="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      <div v-for="n in 10" :key="n" class="w-full h-40  border rounded-md p-7">
        <p>About Page{{ n }}</p>
      </div>
    </div>
  </MainLayouts>
</template>
