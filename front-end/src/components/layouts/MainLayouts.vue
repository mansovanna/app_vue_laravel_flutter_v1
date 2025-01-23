<script setup lang="ts">
import MainSidebar from '../Sidebar/MainSidebar.vue';
import MainHeader from '../Headers/MainHeader.vue';
</script>

<template>
  <div class="w-full h-screen flex overflow-x-hidden dark:bg-boxdark-2">
    <!-- Start Side Bar -->
    <MainSidebar />
    <!-- End Side Bar -->

    <div class="relative w-full h-full  overflow-y-auto">
      <!-- Start Header -->
      <MainHeader />
      <!-- End Header -->

      <main class="max-auto w-full">
        <!-- Content -->
        <slot></slot>
        <!-- End Content -->
      </main>
    </div>
  </div>
</template>
