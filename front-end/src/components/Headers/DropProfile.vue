<script setup lang="ts">
import { useActionStore } from '@/stores/action';
import { ref } from 'vue';


const useActionStoreDrop = useActionStore();

const dropProfile = ref()

</script>


<template>
  <div v-if="useActionStoreDrop.isDropProfile" class="min-w-64 h-72 bg-white rounded-sm border shadow-9 absolute top-12"
    ref="dropProfile">

  </div>
</template>
