<script setup lang="ts">
import { ref } from 'vue';
import { IconComputer, IconHome } from '@/model/icons';



const listMenu = ref([
  {
    title: 'Dashboard',
    icon: IconHome,
    link: '#',
  },
  {
    title: 'Users',
    icon: IconComputer,
    link: '#',
  },

]);

</script>

<template>
  <aside class="min-w-64 h-screen bg-boxdark-2 dark:bg-boxdark text-white">
    <!-- Header of Side Bar -->
    <div class="w-full">
      <div class="flex items-center justify-center h-16 ">
        <h1 class="text-2xl font-bold">Admin</h1>
      </div>
    </div>
    <!-- Header of Side Bar -->
    <hr>
    <!-- Block Menu -->

    <ul class="p-3 font-medium">
      <li v-for="menu in listMenu" :key="menu.title">
        <router-link to="#">
          <div class="w-full p-2 hover:bg-slate-600 rounded-sm flex flex-row items-center gap-2">
            <component :is="menu.icon" class="size-6"></component>
            <p>{{ menu.title }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
