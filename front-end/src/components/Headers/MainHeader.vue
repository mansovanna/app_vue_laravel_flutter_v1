<script setup lang="ts">
// import { ref } from 'vue';
import SearchView from "./SearchView.vue";
import profile from "../../assets/images/user/user-07.png"
import DropProfile from "./DropProfile.vue";
import DropNotification from "./DropNotification.vue";
import DropDarkMode from "./DropDarkMode.vue";
import { useActionStore } from "@/stores/action";

const useActionFormStore = useActionStore();

</script>

<template>

  <header class="sticky top-0 right-0 z-99999">
    <div class="w-full px-4 py-3 shadow-lg bg-white dark:bg-boxdark flex flex-row justify-between items-center">
      <SearchView />
      <div class="flex flex-row items-center gap-4">
        <!-- ========= Block ============ -->
        <!-- Dark Mode -->
        <DropDarkMode />
        <!-- End Dark Mode -->
        <!-- Block Notification -->
        <DropNotification />
        <!-- End Block Notification -->
        <!-- ========= Block ============ -->
        <div class="flex flex-row justify-end items-center relative">
          <div class=" rounded-full shadow-2  cursor-pointer" v-on:click="useActionFormStore.toggleProfile();">
            <img :src="profile" class="size-10 object-cover" alt="">
          </div>
          <!--  -->
          <DropProfile />
        </div>
      </div>
    </div>
  </header>
</template>
