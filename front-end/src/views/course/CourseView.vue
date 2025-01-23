<script setup lang="ts">
import MainLayouts from '@/components/layouts/MainLayouts.vue';

import { useRouter } from 'vue-router';

const route = useRouter();



</script>

<template>
  <MainLayouts>
    <div class="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      <div class="w-full flex justify-between items-center gap-4">
        <h1 class="text-xl font-semibold">Course</h1>

        <button v-on:click="route.go(-1)" class="bg-primary p-2 text-white rounded-md">
          Back
        </button>
      </div>
    </div>
  </MainLayouts>
</template>
